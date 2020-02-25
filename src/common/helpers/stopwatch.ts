import * as Constants from '../static/constants';

const log = require('loglevel-colored-level-prefix')({level: Constants.GLOBAL_LOG_LEVEL});

/**
 * Enum to discern what result string to print when getting Stopwatch result
 *
 * @export ResultType
 * @enum {number}
 */
export enum ResultType {
  DELIVERY = 0,
  CREATE,
  DESERIALIZE,
  UPDATE
}

export class Stopwatch {
  startTime: number = 0;
  stopTime: number = 0;

  start(): number {
    this.reset();
    this.startTime = new Date().getTime();
    return this.startTime;
  }

  stop(): Stopwatch {
    this.stopTime = new Date().getTime();
    return this; // So you can chain stop and res like so -> .stop().res(...)
  }

  result(resultType: ResultType, data: any = '', start: number = this.startTime, stop: number = this.stopTime) {
    const deltaTime = stop - start;

    switch(resultType) {
      case ResultType.DELIVERY:
        log.debug(`Took ${deltaTime}ms to RECEIVE msg with a byte array of size ${data}`);
        break;
      case ResultType.CREATE:
        log.debug(`Took ${deltaTime}ms to CREATE ${data} citizens`);
        break;
      case ResultType.DESERIALIZE:
        log.debug(`Took ${deltaTime}ms to DESERIALIZE msg with a byte array of size ${data}`);
        break;
      case ResultType.UPDATE:
        log.debug(`Took ${deltaTime}ms to UPDATE ${data} citizens`);
        break;
      default:
        log.error("Undefined enum, I don't know what to print");
        break;
    }
  }

  reset() {
    this.startTime = 0;
    this.stopTime = 0;
  }
}