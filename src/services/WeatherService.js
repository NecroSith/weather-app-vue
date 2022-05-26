import axios from 'axios'

export default class WeatherService {
  apiBase = 'http://api.openweathermap.org'
  apiKey = '58ff5b1d885a7e404fd00be458168ffb'
  coordsToProcess = {
    lat: 0,
    lon: 0
  }

  getCoordsByCityName(cityName) {
    const apiGeocodeUrl = `${this.apiBase}/geo/1.0/direct?q=${cityName}&limit=1&appid=${this.apiKey}`
    return axios.get(apiGeocodeUrl)
      .then(res => {
        this.coordsToProcess.lat = res.data[0].lat
        this.coordsToProcess.lon = res.data[0].lon
      });
  }

  getForecast(cityName) {
      return this.getCoordsByCityName(cityName)
        .then(() => {
          const coords = this.coordsToProcess
          const apiForecastUrl = `${this.apiBase}/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&units=metric&exclude=minutely,alerts&appid=${this.apiKey}`

          return axios.get(apiForecastUrl);
        });
  }
}
