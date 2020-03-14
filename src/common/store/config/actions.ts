import { VisibilityActions, VisibilitySelection, TOGGLE_VISIBILITY } from './action_types';

/**
 * Action Creators
 * To be used when updating state, e.g. store.dispatch(toggleCitizens())
 */
// TypeScript infers that this function is returning ToggleVisibilityAction
export function toggleVisibility(select: VisibilitySelection): VisibilityActions {
  return {
    type: TOGGLE_VISIBILITY,
    toggle: select
  }
}