import * as Constants from '../common/static/constants';
import { OnWsMessageCallback } from '../common/static/types';

const log = require('loglevel-colored-level-prefix')({level: Constants.GLOBAL_LOG_LEVEL});

class WebSocketClient {
  ws: WebSocket;

  constructor(onMessageCallback: OnWsMessageCallback, address: string) {
    this.ws = new WebSocket(address);

    if (this.ws !== null) {
      this.ws.onopen = (event: any) => {
        log.debug(`WebSocketClient connection opened at ${event.target.url}`);
      }

      this.ws.onmessage = (event) => {
        onMessageCallback(event.data);
      }

      this.ws.onclose = (event) => {
        log.warn('WebSocketClient connection closed, refresh page to try and reconnect');
      }

      this.ws.onerror = (event) => {
        // The WebSocket prints it's own error
      }
    }
  }
}

export default WebSocketClient;