import * as Constants from './constants'

/**
 * Prefaces the given string with '[DEBUG]' and prints to console.
 * Only prints if debug traces are enabled
 */
export function DEBUG(text: string) {
  if(Constants.ENABLE_DEBUG === true) {
    console.log('[DEBUG] ' + text);
  }
}

/**
 * Prefaces the given string with '[ERROR]' and prints to console.
 */
export function ERROR(text: string) {
  console.error('[ERROR] ' + text);
}