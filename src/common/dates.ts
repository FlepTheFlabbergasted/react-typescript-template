import * as Constants from './constants'

/**
 * Returns the given date as YYYY-MM-DD
 */
export function getIsoDate(date: Date = new Date()): string {
  return date.toISOString().slice(0,10);
}

/**
 * Returns the given date and time as YYYY-MM-DDTHH:mm:ss.sssZ (ISO 8601 format)
 */
export function getIsoDateAndTime(date: Date = new Date()): string {
  return date.toISOString();
}