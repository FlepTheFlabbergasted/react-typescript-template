import * as TRACE from './trace'

export enum ResultType {
  DELIVERY = 0,
  CREATE,
  DESERIALIZE,
  DRAW
}

export class Stopwatch {
  startTime: number = 0;
  stopTime: number = 0;

  start(): number {
    this.reset();
    this.startTime = new Date().getTime();
    return this.startTime;
  }

  stop(): object {
    this.stopTime = new Date().getTime();
    return this; // So you can chain stop and res like so -> .stop().res(...)
  }

  result(resultType: ResultType, data = '', start = this.startTime, stop = this.stopTime) {
    const deltaTime = stop - start;

    switch(resultType) {
      case ResultType.DELIVERY:
        TRACE.DEBUG(`Took ${deltaTime}ms to receive msg with a byte array of size ${data}`);
        break;
      case ResultType.CREATE:
        TRACE.DEBUG(`Took ${deltaTime}ms to create ${data} citizens`);
        break;
      case ResultType.DESERIALIZE:
        TRACE.DEBUG(`Took ${deltaTime}ms to deserialize msg with a byte array of size ${data}`);
        break;
      case ResultType.DRAW:
        TRACE.DEBUG(`Took ${deltaTime}ms to update position for ${data} citizens`);
        break;
      default:
        TRACE.ERROR("Undefined enum, I don't know what to print");
        break;
    }
  }

  reset() {
    this.startTime = 0;
    this.stopTime = 0;
  }
}