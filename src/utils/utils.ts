import { REGIONS, CITIES, CLASSIC_NORTHEAST, CLASSIC_SOUTHEAST, CLASSIC_NORTHCENTRAL, CLASSIC_SOUTHCENTRAL, CLASSIC_PLAINS, CLASSIC_NORTHWEST, CLASSIC_SOUTHWEST } from "../constants";
import payoutData from '../data/payout.json';
import citiesData from '../data/cities.json';

export function randomIntFromInterval(min, max) { // min and max included 
  return Math.floor(Math.random() * (max - min + 1) + min)
}

export const randomlySelectRegion = ()  => {
  let regionsArray = Object.values(REGIONS);
  regionsArray = regionsArray.splice(0, regionsArray.length / 2)
  const randomNumber = randomIntFromInterval(0, regionsArray.length - 1);
  return regionsArray[randomNumber];
}

export const getRegionArray = () => {
  let regionsArray = Object.values(REGIONS);
  regionsArray = regionsArray.splice(0, regionsArray.length / 2)
  return regionsArray;
}

export const getRandomCity = (region = undefined) => {
  let cityEntries = Object.entries(CITIES);
  if (region) {
    cityEntries = cityEntries.filter(cityEntries => Object.values(REGIONS)[cityEntries[1]] === region)
  }
  const randomNumber = randomIntFromInterval(0, cityEntries.length - 1)
  return cityEntries[randomNumber]
}

export const getDisplayCityName = (city: string) => {
  const lowercaseCity = city.toLowerCase();
  const nameArray = lowercaseCity.split('_');
  const newArray = nameArray.map(name => name.charAt(0).toUpperCase() + name.slice(1))
  const result = newArray.join(' ');
  return result
}

export const getDisplayRegionName = (region: string) => {
  const newRegion = region.toLowerCase()
  const result = newRegion.charAt(0).toUpperCase() + newRegion.slice(1);
  return result
}

const determineCityId = (name: string) => {
  const cities = Object.entries(citiesData).sort((a, b) => Number(a[0]) - Number(b[0]))
  const city = cities.find(entry => entry[1] === name);
  return city[0]
}

export const getPayout = (start, destination) => {
  const startId = determineCityId(start[0]);
  const destinationId = determineCityId(destination[0])
  const ids = [startId, destinationId].sort((a, b) => Number(a) - Number(b));
  const payout = payoutData.find(p => p.OriginCityId === Number(ids[0]) && p.DestinationCityId === Number(ids[1]))
  return payout?.Amount ?? 0
}

export const rollDiceTwice = () => {
  const num1 = randomIntFromInterval(1, 6);
  const num2 = randomIntFromInterval(1, 6);
  const evenOdd = randomIntFromInterval(0, 1);
  return [num1 + num2, evenOdd]
}

export const formatPayout = (payoutBase: number) => {
  const payout = payoutBase * 1000;
  const payoutString = String(payout);
  let result = payoutString;
  if (payoutString.length > 3) {
    const a = payoutString.split('');
    const b = a.reverse();
    b.splice(3, 0, ',');
    result = b.reverse().join('');
  }
  return result
}

export const getClassicRegion = (index) => {
  const region = REGIONS[index];
  if (region === 'NORTHEAST') {
    return CLASSIC_NORTHEAST
  }
  if (region === 'SOUTHEAST') {
    return CLASSIC_SOUTHEAST
  }
  if (region === 'NORTHCENTRAL') {
    return CLASSIC_NORTHCENTRAL
  }
  if (region === 'SOUTHCENTRAL') {
    return CLASSIC_SOUTHCENTRAL
  }
  if (region === 'PLAINS') {
    return CLASSIC_PLAINS
  }
  if (region === 'NORTHWEST') {
    return CLASSIC_NORTHWEST
  }
  if (region === 'SOUTHWEST') {
    return CLASSIC_SOUTHWEST
  }
  return new Error()
}

