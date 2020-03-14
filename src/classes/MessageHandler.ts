import { ResultType, Stopwatch } from '../common/helpers/stopwatch';
import * as Constants from '../common/static/constants';
import { classLogger as log } from '../common/static/loggers';
import { OnMessageCallback } from '../common/static/types';
import WebSocketClient from './WebSocketClient';

const gpb = require('../protobuf/interface_pb');

class MessageHandler {
  wsClient: WebSocketClient;
  stopwatch: Stopwatch = new Stopwatch();
  onMsg: OnMessageCallback;

  constructor(onMessage: OnMessageCallback) {
    this.wsClient = new WebSocketClient(this.handleMessage, Constants.WEBSOCKET_ADDRESS);
    this.onMsg = onMessage;
  }

  /**
   * TODO: When GPB messages have types (TypeScript generated code), change return to {BaseMessage | null}
   *
   * @param {Blob} serializedMsg The message to deserialize
   * @memberof MessageHandler
   * @returns {any | null} The deserialized msg or null if error
   */
  deserializeMsg = (serializedMsg: Blob): any | null => {
    const that = this; // Save 'this' (MessageHandler) to be able to reference it in the Promise callback below
    const startTime: number = this.stopwatch.start();
    let baseMessage;// gpb.CitySim.BaseMessage;

    // Using Google Protobuf the message is received on the socket as a Blob. Here we convert it to an arraybuffer
    // and then deserialize the message hopefully containing a valid GPB message
    return new Response(serializedMsg).arrayBuffer().then(function(arrayBuffer: ArrayBuffer) {
      let uintArray: Uint8Array;

      try {
        uintArray = new Uint8Array(arrayBuffer);
        // Deserialize the byte array (serializedMsg) to a readable instance of a GPB msg
        baseMessage = gpb.BaseMessage.deserializeBinary(uintArray);
      } catch(error) {
        log.error(error);
        return null;
      }

      // ArrayBuffer.byteLength is the same as the length on the converted UIntArray
      that.stopwatch.stop().result(ResultType.DESERIALIZE, uintArray.length);

      // If any send time was included, only for debugging (stopwatch)
      let timestamp = baseMessage.getTimestamp();
      if (timestamp) {
        that.stopwatch.result(ResultType.DELIVERY, uintArray.length, timestamp, startTime);
      }

      return baseMessage;
    });
  }


  /**
   * Serializes and calls registered callbacks with the deserialized messages
   *
   * @param {Blob} serializedMsg The message to deserialize and pass on to message callbacks
   * @memberof MessageHandler
   */
  handleMessage = async (serializedMsg: Blob)  => {
    let baseMessage = await this.deserializeMsg(serializedMsg);

    // Error when deserializing
    if (baseMessage === null) {
      return;
    }

    // TODO: This seriously needs a test to catch errors. Js won't warn if you spell the enums wrong
    // Consider upgrading to TypeScript in the future: https://github.com/microsoft/TypeScript/issues/17896
    switch(baseMessage.getMessagetypeCase()) {
      case gpb.BaseMessage.MessagetypeCase.TEXT_MESSAGE:
        const textMsg = baseMessage.getTextMessage().toObject();
        // log.debug("Received a InitiateWorld message");
        this.onMsg.onMsgCallback(textMsg);
        break;
      case gpb.BaseMessage.MessagetypeCase.MESSAGETYPE_NOT_SET:
        log.error('Message type not set');
        break;
      default:
        log.error(`Undefined message, I don't know how to handle this`);
        break;
    }
  }
}

export default MessageHandler;