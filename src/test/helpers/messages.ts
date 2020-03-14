import * as Constants from '../../common/static/constants';
import * as Dates from './dates';
import * as Random from './random';

const gpb = require('../../protobuf/interface_pb');

const originCoords = Constants.COORDINATES_SWEDEN_UMEA.CITY;
const deviation = Constants.TEST_LAT_LNG_DEVIATION;

/*************************************************/
/*                  BaseMessage                  */
/*************************************************/
export const getBaseMessage = () => {
  const baseMessage = new gpb.BaseMessage();
  baseMessage.setTimestamp(Dates.getTimeStamp());

  return baseMessage;
}

/*************************************************/
/*                InitiateWorld                  */
/*************************************************/
export const getInitiateWorldMsg = (nrCitizens: number, nrBaseStations: number) => {
  const initiateWorldMsg = new gpb.InitiateWorld();
  initiateWorldMsg.setCitizens(getCitizensMsg(nrCitizens));
  initiateWorldMsg.setBaseStations(getBaseStationsMsg(nrBaseStations));

  return initiateWorldMsg;
}

/*************************************************/
/*                   Citizens                    */
/*************************************************/
export const getCitizensMsg = (nrCitizens: number) => {
  const citizensMsg = new gpb.Citizens();

  let citizensList = [];
  for(var i = 0; i < nrCitizens; i++) {
    citizensList.push(getCitizen(
      i,
      Random.getFloatFromInterval(originCoords.lat - deviation, originCoords.lat + deviation),
      Random.getFloatFromInterval(originCoords.lng - deviation, originCoords.lng + deviation))
    );
  }

  citizensMsg.setCitizensList(citizensList);

  return citizensMsg;
}

export const getCitizen = (id: number, lat: number, lng: number) => {
  let citizen = new gpb.Citizen();
  citizen.setId(id);
  citizen.setCoordinates(getCoordinates(lat, lng));

  return citizen;
}

/*************************************************/
/*                 BaseStations                  */
/*************************************************/
export const getBaseStationsMsg = (nrBaseStations: number) => {
  const baseStationsMsg = new gpb.BaseStations();

  let baseStationsList = [];
  for(var i = 0; i < nrBaseStations; i++) {
    baseStationsList.push(getBaseStation(
      i,
      Random.getFloatFromInterval(originCoords.lat - deviation, originCoords.lat + deviation),
      Random.getFloatFromInterval(originCoords.lng - deviation, originCoords.lng + deviation),
      Random.getFloatFromInterval(i, deviation))
    );
  }

  baseStationsMsg.setBaseStationsList(baseStationsList);

  return baseStationsMsg;
}

export const getBaseStation = (id: number, lat: number, lng: number, radius: number) => {
  let baseStation = new gpb.BaseStation();
  baseStation.setId(id);
  baseStation.setCoordinates(getCoordinates(lat, lng));
  baseStation.setRadius(radius);

  return baseStation;
}

/*************************************************/
/*                 Coordinates                   */
/*************************************************/
export const getCoordinates = (lat: number, lng: number): {lat: number, lng: number} => {
  // TODO: So annoying to not be able to chain functions like pos.setId().setLat();
  let coordinates = new gpb.Coordinates();
  coordinates.setLat(lat);
  coordinates.setLng(lng);

  return coordinates;
}

export const getCoordinatesList = (nrCoordinates: number): Array<{lat: number, lng: number}> => {
  let coordinatesList: Array<{lat: number, lng: number}> = [];

  for(var i = 0; i < nrCoordinates; i++) {
    coordinatesList.push(getCoordinates(
      Random.getFloatFromInterval(originCoords.lat - deviation, originCoords.lat + deviation),
      Random.getFloatFromInterval(originCoords.lng - deviation, originCoords.lng + deviation))
    );
  }

  return coordinatesList;
}