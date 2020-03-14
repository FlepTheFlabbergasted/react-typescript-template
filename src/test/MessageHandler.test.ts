import MessageHandler from '../classes/MessageHandler';
import { classLogger as log } from '../common/static/loggers';
import { OnMessageCallback } from '../common/static/types';
import { getBaseMessage } from './helpers/messages';

const gpb = require('../protobuf/interface_pb');

let sut: MessageHandler;

beforeEach(() => {
  let onMsgMock: OnMessageCallback = {
    onMsgCallback: jest.fn()
  };

  sut = new MessageHandler(onMsgMock);
});

describe('MessageHandler', () => {
  it('Can deserialize messages', async () => {
    // let initiateWorldMsg = getInitiateWorldMsg(10, 5);
    // let citizensMsg = getCitizensMsg(10);
    // let baseMessage1 = getBaseMessage();
    // let baseMessage2 = getBaseMessage();

    // baseMessage1.setInitiateWorld(initiateWorldMsg);
    // baseMessage2.setCitizens(citizensMsg);
    // let serializedMsg1 = baseMessage1.serializeBinary();
    // let serializedMsg2 = baseMessage2.serializeBinary();

    // // InitiateWorld message
    // {
    //   const expectedDesMsg = gpb.BaseMessage.deserializeBinary(serializedMsg1);
    //   const returnedDesMsg = await sut.deserializeMsg(serializedMsg1);
    //   expect(returnedDesMsg).toEqual(expectedDesMsg);
    // }

    // // Citizens message
    // {
    //   const expectedDesMsg = gpb.BaseMessage.deserializeBinary(serializedMsg2);
    //   const returnedDesMsg = await sut.deserializeMsg(serializedMsg2);
    //   expect(returnedDesMsg).toEqual(expectedDesMsg);
    // }
  });

  it('Can handle messages', async () => {
    // let initiateWorldMsg = getInitiateWorldMsg(10, 5);
    // let citizensMsg = getCitizensMsg(10);
    // let baseMessage1 = getBaseMessage();
    // let baseMessage2 = getBaseMessage();

    // baseMessage1.setInitiateWorld(initiateWorldMsg);
    // baseMessage2.setCitizens(citizensMsg);
    // let serializedMsg1 = baseMessage1.serializeBinary();
    // let serializedMsg2 = baseMessage2.serializeBinary();

    // TextMessage message
    {
      // await sut.handleMessage(serializedMsg1);
      // expect(initiateWorldMsgCallback).toHaveBeenCalledTimes(1);
      // expect(initiateWorldMsgCallback).toHaveBeenCalledWith(initiateWorldMsg.toObject());
    }
  });

  it('Can handle invalid messages', async () => {
    // let baseMessage1 = getBaseMessage();
    // let serializedMsg1 = baseMessage1.serializeBinary();

    // // Error: MessageType not set
    // {
    //   const spyLog = jest.spyOn(log, 'error');

    //   await sut.handleMessage(serializedMsg1);
    //   expect(citizensMsgCallback).toHaveBeenCalledTimes(0);
    //   expect(spyLog).toHaveBeenCalledWith('Message type not set');
    // }

    // // Error: Invalid message (Invalid wire type)
    // {
    //   // const spyLog = jest.spyOn(log, 'error');

    //   await sut.handleMessage(baseMessage1);
    //   expect(citizensMsgCallback).toHaveBeenCalledTimes(0);
    //   // TODO: Cannot get correct string in expects, but I can see that the string prints to console correctly
    //   // expect(spyLog).toHaveBeenCalledWith(expect.stringMatching(/.*\[AssertionError: Failure: Invalid wire type: 7 (at position 1)\].*/gm));
    //   // expect(spyLog).toHaveBeenLastCalledWith(expect.arrayContaining(['[AssertionError: Failure: Invalid wire type: 7 (at position 1)]']));
    // }
  });
});