const currentYear = new Date().getFullYear()
document.getElementById("currentyear").textContent = currentYear

  // Set last modified date in footer
const lastModified = document.lastModified
document.getElementById("lastmodified").textContent = lastModified

const temperature = 10; 
const windSpeed = 5; 
const unit = "metric";

function calculateWindChill(temperature, windSpeed, unit) {
  if (unit === "imperial") {
      // Imperial formula: 35.74 + 0.6215T - 35.75(V^0.16) + 0.4275T(V^0.16)
      // Valid for T <= 50°F and V > 3 mph
      if (temperature <= 50 && windSpeed > 3) {
          return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
      }
  } else if (unit === "metric") {
      // Metric formula: 13.12 + 0.6215T - 11.37(V^0.16) + 0.3965T(V^0.16)
      // Valid for T <= 10°C and V > 4.8 km/h
      if (temperature <= 10 && windSpeed > 4.8) {
          return (13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
      }
  }
  return "N/A";
}

    // Calculate wind chill
const windChill = calculateWindChill(temperature, windSpeed, unit);

document.getElementById("wind-chill").textContent = `${windChill}°C`

