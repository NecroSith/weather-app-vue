<template>
  <div class="card-wrapper__card">
    <div class="card__upper-wrapper">
      <div class="upper-wrapper__main">
        <h5 class="card__title">
          {{ today ? 'Today' : getFormattedDate() }}
        </h5>
        <div class="card__temp">
          {{ weatherData.temp.day ? getTempValue(weatherData.temp.day) : getTempValue(weatherData.temp) }}
        </div>
        <div class="card__feels-like">feels like
          <span style="font-size: 20px">
              {{ weatherData.feels_like.day ? getTempValue(weatherData.feels_like.day) : getTempValue(weatherData.feels_like) }}
            </span></div>
      </div>
      <div class="card__icon">
        <img :src="getIconSrc()" alt="logo">
      </div>
    </div>
    <div class="card__lower-wrapper">
      <div class="card__left-wrapper">
        <div style="margin-bottom: 10px;"><b>Wind</b></div>
        <div class="wind__speed">{{ weatherData.wind_speed }} m/s</div>
        <div class="wind__dir">
          <img src="../assets/wind.png"
               alt="wind"
               style="width: 60px"
               :style="{ 'transform': getWindRotationDeg() }">
        </div>
      </div>
      <div class="card__right-wrapper">
        <div style="margin-bottom: 10px;"><b>Wind</b></div>
        <div class="wind__speed"> {{ getPressure() }}</div>
        <div style="margin: 10px 0;"><b>Humidity</b></div>
        <div class="wind__speed"> {{ weatherData.humidity }}%</div>
      </div>
    </div>
  </div>
</template>

<script>
import UtilsService from "@/services/UtilsService";
const utils = new UtilsService();

export default {
  name: "WeatherCard",
  props: {
    today: Boolean,
    weatherData: {
      type: Object
    }
  },
  methods: {
    getFormattedDate() {
      const unixTimestamp = this.weatherData.dt
      const date = new Date(unixTimestamp * 1000);
      const day = date.getDate();
      const month = "0" + date.getMonth();

      return day + '.' + month;
    },
    getTempValue(rawValue) {
      const rounded = Math.round(rawValue);
      const prefix = rawValue > 0 ? '+' : '';

      return prefix + rounded;
    },
    getWindRotationDeg() {
      const direction = 180 + this.weatherData.wind_deg;
      return 'rotate(' + direction + 'deg)';
    },
    getPressure() {
      const mmHg = utils.convertHPaToMmHSt(this.weatherData.pressure)
      return Math.round(mmHg) + 'mm Hg';
    },
    getIconSrc() {
      const skyState = this.weatherData.weather[0].description;
      const img = require.context('../assets/', false, /\.png$/);

      switch (skyState) {
        case 'overcast clouds':
        case 'broken clouds': {
          return img('./clouds.png');
        }
        case 'scattered clouds':
        case 'few clouds': {
          return img('./cloudy.png');
        }
        case 'clear sky': {
          return img('./sun.png');
        }
        case 'moderate rain': {
          return img('./rain.png');
        }
        default: break;
      }
    }
  }
}
</script>

<style scoped>
  .card-wrapper__card {
    width: 250px;
    height: 300px;
    background: #e6e6e6;
    border-radius: 15px;
    color: #333;
  }
  .card__upper-wrapper, .card__lower-wrapper {
    display: flex;
    margin-bottom: 20px;
  }
  .card__upper-wrapper > *, .card__lower-wrapper > * {
    width: 50%;
  }
  .card__title {
    font-size: 25px;
    margin: 10px;
  }
  .card__temp {
    font-size: 35px;
    margin-bottom: 10px;
  }
  .card__icon img {
    width: 90px;
    margin: 10px;
  }
</style>
