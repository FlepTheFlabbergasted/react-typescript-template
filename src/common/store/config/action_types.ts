/**
 * Action Constants
 */
export const TOGGLE_VISIBILITY = 'TOGGLE_VISIBILITY'

/*
 * Other Constants
 */
export enum VisibilitySelection {
  TOGGLE_CITIZENS = 'TOGGLE_CITIZENS',
  TOGGLE_BASE_STATIONS = 'TOGGLE_BASE_STATIONS',
  TOGGLE_BS_RADIUS = 'TOGGLE_BS_RADIUS',
}

/**
 * Action Types
 */
interface ToggleVisibilityAction {
  type: typeof TOGGLE_VISIBILITY,
  toggle: VisibilitySelection,
}

// Using TypeScript's Union Type here to express all possible actions
export type VisibilityActions = ToggleVisibilityAction // | SomeOtherAction