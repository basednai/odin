// x °C ≘ (x × (⁠9/5) + 32) °F
// x °F ≘ (x − 32) × ⁠5/9 °C
const convertToCelsius = function (temp) {
  let conversion = ((temp - 32) * (5 / 9))
  return Math.round(conversion * 1e1) / 1e1
};

const convertToFahrenheit = function (temp) {
  let conversion = (temp * (9 / 5) + 32).toFixed(1)
  return Math.round(conversion * 1e1) / 1e1

};

convertToCelsius(108)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
