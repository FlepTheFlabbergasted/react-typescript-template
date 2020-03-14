import update from 'immutability-helper';

import { stateLogger as log } from '../../static/loggers';
import { TOGGLE_VISIBILITY, VisibilityActions, VisibilitySelection } from './action_types';
import { ConfigState, initialConfigState } from './state';

/**
 * Reducers
 * @see https://redux.js.org/basics/reducers/
 */

/**
 * Config reducer, handles all map configuration. Updates state according to actions without mutating it.
 *
 * @param state Current configuration state of the application
 * @param action Action to take on the state
 */
export function configReducer(state: ConfigState = initialConfigState, action: VisibilityActions): ConfigState {
  switch (action.type) {
    case TOGGLE_VISIBILITY:
      if (action.toggle === VisibilitySelection.TOGGLE_CITIZENS) {
        return update(state, {citizens: {$toggle: ['show']}});
      } else if (action.toggle === VisibilitySelection.TOGGLE_BASE_STATIONS) {
        return update(state, {baseStations: {$toggle: ['show']}});
      } else if (action.toggle === VisibilitySelection.TOGGLE_BS_RADIUS) {
        return update(state, {baseStations: {$toggle: ['showRadius']}});
      } else {
        log.error('Unknown VisibilitySelection, how did you even manage to compile this!?');
        return state;
      }
    default:
      return state
  }
}