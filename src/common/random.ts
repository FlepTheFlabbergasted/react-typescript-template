/**
 * Returns a random integer between min and max (min and max included)
 */
export function randomIntFromInterval(min: number, max: number): number {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

/**
 * Returns a random float between min and max (excluding min and max)
 */
export function randomFloatFromInterval(min: number, max: number, nrDecimals: number = 6): number {
  return Math.random() * (max - min) + min;
}