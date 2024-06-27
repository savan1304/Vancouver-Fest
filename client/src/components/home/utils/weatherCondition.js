function getWeatherCondition(code) {
    const weatherCodeMap = {
      0: "Clear sky",
      1: "Mainly clear sky",
      2: "Partly cloudy sky",
      3: "Overcast conditions",
      45: "Foggy weather",
      48: "Depositing rime foggy weather",
      51: "Light Drizzle",
      53: "Moderate Drizzle",
      55: "Dense Drizzle",
      56: "Light Freezing Drizzle",
      57: "Dense Freezing Drizzle",
      61: "Slight Rain",
      63: "Moderate Rain",
      65: "Heavy Rain",
      66: "Light Freezing Rain",
      67: "Heavy Freezing Rain",
      71: "Slight Snow fall",
      73: "Moderate Snow fall",
      75: "Heavy Snow fall",
      77: "Snow grains",
      80: "Slight Rain showers",
      81: "Moderate Rain showers",
      82: "Violent Rain showers",
      85: "Slight Snow showers",
      86: "Heavy Snow showers",
      95: "Slight or moderate Thunderstorm",
      96: "Thunderstorm with slight hail",
      99: "Thunderstorm with heavy hail",
    };
  
    // Check for specific codes first
    if (weatherCodeMap[code]) {
      return weatherCodeMap[code];
    }
  
    // Handle ranges of codes
    if (code >= 1 && code <= 3) {
      return "Mainly clear, partly cloudy, or overcast"; // Group these similar conditions
    }
  
    // Default case if code is not found
    return "Unknown weather code"; 
  }

export default getWeatherCondition;

