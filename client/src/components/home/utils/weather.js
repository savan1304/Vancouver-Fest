import Axios from "axios";

async function getWeatherForAddress(lat, lng, startDate, endDate) {
    const response = await Axios.get(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=16`);

    console.log("inside weather.js")
    console.log('given start date: ', startDate)
    console.log('given end date: ', endDate)
    const data = response.data;
    console.log(data)

    const startIndex = data.daily.time.indexOf(startDate);
    const endIndex = data.daily.time.indexOf(endDate) + 1; // Inclusive of endDate
    console.log('startIndex: ', startIndex)
    console.log('endIndex: ', endIndex)


    // Error handling for invalid date range
    if (startIndex > endIndex) {
        throw new Error("Invalid date range");
    }

    // Slice the relevant portions of the data arrays
    const relevantMaxTemps = data.daily.temperature_2m_max.slice(startIndex, endIndex);
    console.log("releventMaxTemps: ",relevantMaxTemps)

    const relevantMinTemps = data.daily.temperature_2m_min.slice(startIndex, endIndex);
    console.log("relevantMinTemps: ", relevantMinTemps)

    const relevantWeatherCodes = data.daily.weather_code.slice(startIndex, endIndex);
    console.log("relevantWeatherCodes: ",relevantWeatherCodes)

    // 1. Average Max Temperature
    const avgMaxTemp =
        relevantMaxTemps.reduce((sum, temp) => sum + temp, 0) /
        relevantMaxTemps.length;
    console.log("avg max temp: ", avgMaxTemp)

    // 2. Average Min Temperature
    const avgMinTemp =
        relevantMinTemps.reduce((sum, temp) => sum + temp, 0) /
        relevantMinTemps.length;
    console.log("avg min temp: ", avgMinTemp)

    // 3. Most Common Weather Code
    const codeCounts = {};
    relevantWeatherCodes.forEach(code => {
        codeCounts[code] = (codeCounts[code] || 0) + 1;
    });
    console.log("codeCounts: ", codeCounts)
    const mostCommonCode = Object.keys(codeCounts).reduce((a, b) =>
        codeCounts[a] > codeCounts[b] ? a : b
    );
    console.log("mostCommonCode: ", mostCommonCode)
    console.log("exiting weather.js")
    return {
        avgMaxTemp,
        avgMinTemp,
        mostCommonCode,
    };
}

export default getWeatherForAddress;