/**
 * Interface for configuration state, commented fields are suggestion and/or desired functionality
 *
 * @export {ConfigState}
 * @interface ConfigState
 */
export interface ConfigState {
  citizens: {
    show: boolean, // Show/hide agents on the map, should default to true
    // shape: 'circle',
    // shapeColor: 'red',
    // clustering: true,
  },
  baseStations: {
    show: boolean, // Show/hide base stations on the map, should default to false
    showRadius: boolean,
  }
  // map: {
  //   bounds: {
  //     lat: 61.343434,
  //     lng: 23.897187
  //   },
  //   show-layer: "car/transit/bike/walk"
  // }
}

// Default config state
export const initialConfigState: ConfigState = {
  citizens: {
    show: true,
  },
  baseStations: {
    show: true,
    showRadius: false,
  }
};