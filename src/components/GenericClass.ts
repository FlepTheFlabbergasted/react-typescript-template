import * as Constants from '../common/constants'
import * as TRACE from '../common/trace'

export default class GenericClass {
  constructor() {
    TRACE.DEBUG("I AM CONSTRUCTED");
  } // constructor

  sayHi(): string {
    return `Hi, I'm a class, and this is a constant: ${Constants.ZERO}`;
  }
} // class ThisIsAClass