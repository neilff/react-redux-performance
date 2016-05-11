import leftpad from 'left-pad';

export function convertKelvinToF(K) {
  let tempF;

  // Fahrenheit
  tempF = (K - 273.15) * 1.8000 + 32.00;
  tempF = Math.round(tempF * 10) / 10;

  return tempF;
}

export function convertKelvinToC(K) {
  let tempC;

  // Celsius
  tempC = K - 273.15;
  tempC = Math.round(tempC * 10) / 10;

  return tempC;
}

export function convertFahrenheitToK(F) {
  let tempK;

  // Kelvin
  tempK = ((F - 32) / 1.8) + 273.15;
  tempK = Math.round(tempK * 10) / 10;

  return tempK;
}

export function convertFahrenheitToC(F) {
  return (F - 32) / 1.8;
}

export function convertCelciusToK(C) {
  let tempK;

  // Kelvin
  tempK = C + 273.15;
  tempK = Math.round(tempK * 10) / 10;

  return tempK;
}

export function convertValue(value) {
  return (value / 100) * 2 * Math.PI;
}

export function calculateDonutArc(width, radius) {
  return d3.svg.arc()
    .outerRadius(width / 2)
    .innerRadius((width / 2) - radius)
    .startAngle(0);
}

export function convertMsToTime(ms) {
  let ss = parseInt(ms / 1000, 10);
  const hh = parseInt(ss / 3600, 10);
  ss = ss % 3600;
  const mm = parseInt(ss / 60, 10);
  ss = ss % 60;

  return `${ leftpad(hh, 2, 0) }:${ leftpad(mm, 2, 0) }:${ leftpad(ss, 2, 0) }`;
}
