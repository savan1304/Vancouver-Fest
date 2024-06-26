import Axios from "axios";

const API_KEY = 'AIzaSyBXrC8AUuH-8EwZ0he_GdhAu8D18sya7Ps'

async function getCoordsForAddress(address) {
   const response = await Axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`);

   const data = response.data;

   if(!data || data.status === 'ZERO_RESULTS'){
    const error = new Error("Could not find location for the specified address");
    throw error;
   }

   const coordinates = data.results[0].geometry.location;
   return coordinates;
}

export default getCoordsForAddress;