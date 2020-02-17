import * as Constants from './constants';
import * as Random from './random';

const gpb = require('../protobuf/citysim_pb');

export function getRandomTestData(numItems) {
  let path = Constants.COORDINATES_SWEDEN_UMEA;
  let data = [];
  for(var i = 0; i < numItems; i++) {
    data.push({
      center: {
        lat: Random.randomFloatFromInterval(path.lat - Constants.CITIZEN_CENTER_UPDATE, path.lat + Constants.CITIZEN_CENTER_UPDATE),
        lng: Random.randomFloatFromInterval(path.lng - Constants.CITIZEN_CENTER_UPDATE, path.lng + Constants.CITIZEN_CENTER_UPDATE)
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
        lat: Random.randomFloatFromInterval(path.lat - Constants.CITIZEN_CENTER_UPDATE, path.lat + Constants.CITIZEN_CENTER_UPDATE),
        lng: Random.randomFloatFromInterval(path.lng - Constants.CITIZEN_CENTER_UPDATE, path.lng + Constants.CITIZEN_CENTER_UPDATE)
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
      lat: Random.randomFloatFromInterval(path.lat - Constants.CITIZEN_CENTER_UPDATE, path.lat + Constants.CITIZEN_CENTER_UPDATE),
      lng: Random.randomFloatFromInterval(path.lng - Constants.CITIZEN_CENTER_UPDATE, path.lng + Constants.CITIZEN_CENTER_UPDATE)
    });
  }

  citizens.positionsList = positionsList;
  return citizens;
}

export function getRandomCitizensMsg(numItems) {
  let c = new gpb.Citizens();
  let message = new gpb.Message();

  const path = Constants.COORDINATES_SWEDEN_UMEA;
  let positions = [];

  for(var i = 0; i < numItems; i++) {
    let p = new gpb.Position();
    p.setId(i);
    p.setLat(Random.randomFloatFromInterval(path.lat - Constants.CITIZEN_CENTER_UPDATE, path.lat + Constants.CITIZEN_CENTER_UPDATE));
    p.setLng(Random.randomFloatFromInterval(path.lng - Constants.CITIZEN_CENTER_UPDATE, path.lng + Constants.CITIZEN_CENTER_UPDATE));
    positions.push(p);
  }

  c.setPositionsList(positions);
  message.setCitizens(c);

  const binarySerialized = message.serializeBinary();

  return binarySerialized;
}

export function giveRandomCitizenPath(citizens) {
  let data = [];
  for (var i = 0; i < citizens.length; i++) {
    let prevCenter = citizens[i].center;
    let latMin = Number.parseFloat(prevCenter.lat - Constants.CITIZEN_CENTER_UPDATE)
    let latMax = Number.parseFloat(prevCenter.lat + Constants.CITIZEN_CENTER_UPDATE)
    let lngMin = Number.parseFloat(prevCenter.lng - Constants.CITIZEN_CENTER_UPDATE)
    let lngMax = Number.parseFloat(prevCenter.lng + Constants.CITIZEN_CENTER_UPDATE)

    citizens[i].center = {
      lat: Random.randomFloatFromInterval(latMin, latMax),
      lng: Random.randomFloatFromInterval(lngMin, lngMax),
    };

    data.push(citizens[i]);
  }

  return data;
}