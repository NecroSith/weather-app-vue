<template>
    <MainSpinner />
    <div class="card-wrapper">
      <carousel :items-to-show="4"
                :wrapAround="true"
                :snapAlign="start"
                style="width: 100%;">
<!--        <slide>-->
<!--          <WeatherCard :weather-data="weatherData.current"-->
<!--                       :today="true" />-->
<!--        </slide>-->

        <slide v-for="dailyData in totalWeatherData" :key="dailyData.dt">
          <WeatherCard :today="dailyData.today"
                       :weather-data="dailyData" />
        </slide>

        <template #addons>
          <pagination />
        </template>
      </carousel>
    </div>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";

import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide, Pagination } from 'vue3-carousel';

export default {
  name: "CardWrapper",
  components: {
    WeatherCard,
    Carousel,
    Slide,
    Pagination
  },
  props: {
    weatherData: {
      type: Object
    }
  },
  data() {
    return {
      totalWeatherData: this.getTotalWeatherData()
    }
  },
  methods: {
    getTotalWeatherData() {
      const weatherDataNew = { ...this.weatherData };

      weatherDataNew.current.today = true;
      for (const dailyWeather of weatherDataNew.daily) {
        dailyWeather.today = false;
      }

      weatherDataNew.daily.shift();
      weatherDataNew.daily.unshift(weatherDataNew.current);
      return weatherDataNew.daily;
    }
  }
}
</script>

<style scoped>
.card-wrapper {
  width: 1140px;
  margin: 0 auto;
  display: flex;
  column-gap: 30px;
  flex-wrap: nowrap;
}

</style>
