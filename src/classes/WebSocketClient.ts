import { classLogger as log } from '../common/static/loggers';
import { OnWsMessageCallback } from '../common/static/types';

// TODO: Reconnect automatically
class WebSocketClient {
  ws: WebSocket;

  constructor(onMessageCallback: OnWsMessageCallback, inetSocketAddress: string) {
    this.ws = new WebSocket(inetSocketAddress);

    this.ws.onopen = (event: any) => {
      log.info(`Web socket connection opened at ${event.target.url}`);
    }

    this.ws.onmessage = (event: MessageEvent) => {
      // The event received contains a serialized byte array in event.data
      onMessageCallback(event.data);
    }

    this.ws.onclose = (event: CloseEvent) => {
      log.warn('Web socket connection closed, refresh page to try to reconnect');
    }

    this.ws.onerror = (event: any) => {
      // The WebSocket prints it's own error
    }
  }
}

export default WebSocketClient;