import WS from 'jest-websocket-mock';

import WebSocketClient from '../classes/WebSocketClient';

const wsTestingAddress = 'ws://localhost:1234/';

let server: WS;
let client: WebSocketClient
let onMessageCallback = jest.fn();

beforeEach(async () => {
  onMessageCallback = jest.fn();
  // No reconnect functionality in place so have to recreate the client manually here
  server = new WS(wsTestingAddress);
  client = new WebSocketClient(onMessageCallback, wsTestingAddress);
  await server.connected;
});

afterEach(() => {
  WS.clean();
});

describe('WebSocketClient', () => {
  it('Can receive messages', async () => {
    server.send("Hello client!");
    expect(onMessageCallback).toHaveBeenCalledWith("Hello client!");
    expect(onMessageCallback).toHaveBeenCalledTimes(1);
  });

  it('Can send messages', async () => {
    client.ws.send("Well hello there");
    await expect(server).toReceiveMessage("Well hello there");
    expect(server).toHaveReceivedMessages(["Well hello there"]);
  });
});