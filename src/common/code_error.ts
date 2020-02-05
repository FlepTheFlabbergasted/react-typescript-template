/**
 *  Simple reusable error class to throw custom errors.
 */
export default class CodeError extends Error {
  constructor(message: string) {
    super(message);
  }
}