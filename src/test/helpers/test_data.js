import * as Constants from '../../common/static/constants';
import * as Random from './random';

const gpb = require('../../protobuf/visualization_if_pb');

export function getRandomTestData(numItems) {
  let path = Constants.COORDINATES_SWEDEN_UMEA;
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      center: {
        lat: Random.getFloatFromInterval(path.lat - Constants.TEST_LAT_LNG_DEVIATION, path.lat + Constants.TEST_LAT_LNG_DEVIATION),
        lng: Random.getFloatFromInterval(path.lng - Constants.TEST_LAT_LNG_DEVIATION, path.lng + Constants.TEST_LAT_LNG_DEVIATION)
        // lat: 63.826207,
        // lng: 20.266941
      },
      id: i
    });
  }

  return data;
}

export function getRandomLatLng(numItems) {
  let path = Constants.COORDINATES_SWEDEN_UMEA;
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
        lat: Random.getFloatFromInterval(path.lat - Constants.TEST_LAT_LNG_DEVIATION, path.lat + Constants.TEST_LAT_LNG_DEVIATION),
        lng: Random.getFloatFromInterval(path.lng - Constants.TEST_LAT_LNG_DEVIATION, path.lng + Constants.TEST_LAT_LNG_DEVIATION)
        // lat: 63.826207,
        // lng: 20.266941
    });
  }

  return data;
}

export function getRandomCitizens(numItems) {
  let path = Constants.COORDINATES_SWEDEN_UMEA;
  let citizens = [];
  let positionsList = [];
  for(var i = 0; i < numItems; i++) {
    positionsList.push({
      id: i,
      lat: Random.getFloatFromInterval(path.lat - Constants.TEST_LAT_LNG_DEVIATION, path.lat + Constants.TEST_LAT_LNG_DEVIATION),
      lng: Random.getFloatFromInterval(path.lng - Constants.TEST_LAT_LNG_DEVIATION, path.lng + Constants.TEST_LAT_LNG_DEVIATION)
    });
  }

  citizens.positionsList = positionsList;
  return citizens;
}

export function giveRandomCitizenPath(citizens) {
  let data = [];
  for (var i = 0; i < citizens.length; i++) {
    let prevCenter = citizens[i].center;
    let latMin = Number.parseFloat(prevCenter.lat - Constants.TEST_LAT_LNG_DEVIATION)
    let latMax = Number.parseFloat(prevCenter.lat + Constants.TEST_LAT_LNG_DEVIATION)
    let lngMin = Number.parseFloat(prevCenter.lng - Constants.TEST_LAT_LNG_DEVIATION)
    let lngMax = Number.parseFloat(prevCenter.lng + Constants.TEST_LAT_LNG_DEVIATION)

    citizens[i].center = {
      lat: Random.getFloatFromInterval(latMin, latMax),
      lng: Random.getFloatFromInterval(lngMin, lngMax),
    };

    data.push(citizens[i]);
  }

  return data;
}