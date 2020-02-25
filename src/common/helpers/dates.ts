/**
 *
 * @export getIsoDate
 * @param {Date} [date=new Date()] Date to convert to string, defaults to current date
 * @returns {string} Date as YYYY-MM-DD
 */
export function getIsoDate(date: Date = new Date()): string {
  return date.toISOString().slice(0,10);
}

/**
 *
 * @export getIsoDateAndTime
 * @param {Date} [date=new Date()] Date to convert to string, defaults to current date
 * @returns {string} Date and time as YYYY-MM-DDTHH:mm:ss.sssZ (ISO 8601 format)
 */
export function getIsoDateAndTime(date: Date = new Date()): string {
  return date.toISOString();
}