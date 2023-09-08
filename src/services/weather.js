/*

To start and set the Environment Variable:
  In command line (bash):
    $ VITE_KEY=<your api key> npm run dev

*/
import axios from 'axios'
const api_key = import.meta.env.VITE_KEY
const baseUrl = `http://api.weatherapi.com/v1/current.json?key=${api_key}`

const getWeather = async (city) => {
  const request = axios.get(`${baseUrl}&q=${city}&aqi=no`)
  return request.then( response => response.data )
}

export default {
  getWeather
}