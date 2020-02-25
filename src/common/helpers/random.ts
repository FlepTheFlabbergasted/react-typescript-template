/**
 * Returns a random number between min and max (min and max included)
 *
 * @export randomIntFromInterval
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns a random float between min and max (excluding min and max)
 *
 * @export randomFloatFromInterval
 * @param {number} min
 * @param {number} max
 * @returns {number}
 */
export function randomFloatFromInterval(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}