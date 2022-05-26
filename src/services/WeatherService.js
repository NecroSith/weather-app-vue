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
        console.log('data geocoded', this.coordsToProcess, res.data)
      });
  }

  getForecast(cityName) {
      return this.getCoordsByCityName(cityName)
        .then(() => {
          console.log('we here', this.coordsToProcess)
          const coords = this.coordsToProcess
          const apiForecastUrl = `${this.apiBase}/data/2.5/onecall?lat=${coords.lat}&lon=${coords.lon}&exclude=minutely,alerts&appid=${this.apiKey}`

          return axios.get(apiForecastUrl)
            .then(res => res.data);
        })
  }
}
