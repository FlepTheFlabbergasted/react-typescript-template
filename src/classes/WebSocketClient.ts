import * as Constants from '../common/static/constants';
import { OnWsMessageCallback } from '../common/static/types';

const log = require('loglevel-colored-level-prefix')(Constants.LOGGING_MODULE_CLASSES);

// TODO: Reconnect automatically
class WebSocketClient {
  ws: WebSocket;

  constructor(onMessageCallback: OnWsMessageCallback, address: string) {
    this.ws = new WebSocket(address);

    this.ws.onopen = (event: any) => {
      log.debug(`WebSocketClient connection opened at ${event.target.url}`);
    }

    this.ws.onmessage = (event: MessageEvent) => {
      // The event received contains a serialized byte array in event.data
      onMessageCallback(event.data);
    }

    this.ws.onclose = (event: CloseEvent) => {
      log.warn('WebSocketClient connection closed, refresh page to try and reconnect');
    }

    this.ws.onerror = (event: any) => {
      // The WebSocket prints it's own error
    }
  }
}

export default WebSocketClient;