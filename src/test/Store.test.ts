import * as actions from '../common/store/config/actions'
import * as types from '../common/store/config/action_types'
import { VisibilitySelection } from '../common/store/config/action_types';
import { initialConfigState } from '../common/store/config/state';
import { configReducer } from '../common/store/config/reducers';

describe('Actions', () => {
  it('Should create an action to toggle citizens', () => {
    const selection: VisibilitySelection = VisibilitySelection.TOGGLE_CITIZENS;
    const expectedAction = {
      type: types.TOGGLE_VISIBILITY,
      toggle: selection
    }
    expect(actions.toggleVisibility(selection)).toEqual(expectedAction)
  });

  it('Should create an action to toggle basestations', () => {
    const selection: VisibilitySelection = VisibilitySelection.TOGGLE_BASE_STATIONS;
    const expectedAction = {
      type: types.TOGGLE_VISIBILITY,
      toggle: selection
    }
    expect(actions.toggleVisibility(selection)).toEqual(expectedAction)
  });
});

describe('ConfigReducer', () => {
  it('Should return the initial state', () => {
    expect(configReducer(undefined, ({} as any))).toEqual(initialConfigState);
  });

  it('Should handle faulty toggleVisibility action', () => {
    expect(configReducer(initialConfigState, {
      type: types.TOGGLE_VISIBILITY,
      toggle: ('I AM A FAULTY VISIBILITY_SELECTION' as any)
    })).toEqual(initialConfigState);
    // TODO: Should print error "Unknown VisibilitySelection, how did you even manage to compile this!?"
  });

  it('Should handle toggleVisibility action (citizens)', () => {
    const modifiedState = {...initialConfigState, citizens: {show: !initialConfigState.citizens.show}};

    expect(configReducer(initialConfigState, {
      type: types.TOGGLE_VISIBILITY,
      toggle: VisibilitySelection.TOGGLE_CITIZENS
    })).toEqual(modifiedState);
  });

  it('Should handle toggleVisibility action (base stations)', () => {
    const modifiedState = {
      ...initialConfigState,
      baseStations: {
        show: !initialConfigState.baseStations.show,
        showRadius: initialConfigState.baseStations.showRadius,
      }
    };

    expect(configReducer(initialConfigState, {
      type: types.TOGGLE_VISIBILITY,
      toggle: VisibilitySelection.TOGGLE_BASE_STATIONS
    })).toEqual(modifiedState);
  });

  it('Should handle toggleVisibility action (bs radius)', () => {
    const modifiedState = {
      ...initialConfigState,
      baseStations: {
        show: initialConfigState.baseStations.show,
        showRadius: !initialConfigState.baseStations.showRadius,
      }
    };

    expect(configReducer(initialConfigState, {
      type: types.TOGGLE_VISIBILITY,
      toggle: VisibilitySelection.TOGGLE_BS_RADIUS
    })).toEqual(modifiedState);
  });
});