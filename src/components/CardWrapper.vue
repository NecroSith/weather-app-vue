<template>
    <div class="card-wrapper">
      <WeatherCard :weather-data="weatherData.current"
                    :today="true"/>
      <WeatherCard v-for="dailyData in weatherData.daily.slice(0, 3)"
                   :today="false"
                   :weather-data="dailyData"
                   :key="dailyData.dt" />
    </div>
</template>

<script>
import UtilsService from "@/services/UtilsService";
import WeatherCard from "@/components/WeatherCard";
const utils = new UtilsService();

export default {
  name: "CardWrapper",
  components: {
    WeatherCard
  },
  props: {
    weatherData: {
      type: Object
    }
  },
  methods: {
    getTempValue(rawValue) {
      const rounded = Math.round(rawValue);
      const prefix = rawValue > 0 ? '+' : '';

      return prefix + rounded;
    },
    getWindRotationDeg() {
      const direction = 180 + this.weatherData.current.wind_deg;
      return 'rotate(' + direction + 'deg)';
    },
    getPressure() {
      const mmHg = utils.convertHPaToMmHSt(this.weatherData.current.pressure)
      return Math.round(mmHg) + 'mm Hg';
    },
    getIconSrc() {
      const skyState = this.weatherData.current.weather[0].description;
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
        default: break;
      }
    }
  }
}
</script>

<style scoped>
.card-wrapper {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  /*justify-content: space-between;*/
  column-gap: 30px;
  flex-wrap: nowrap;
}

</style>
