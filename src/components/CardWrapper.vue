<template>
    <MainSpinner />
    <div class="card-wrapper">
      <WeatherCard :weather-data="weatherData.current"
                   :today="true" />
      <WeatherCard v-for="dailyData in weatherData.daily.slice(0, 3)"
                   :today="false"
                   :weather-data="dailyData"
                   :key="dailyData.dt" />
    </div>
</template>

<script>
import WeatherCard from "@/components/WeatherCard";

export default {
  name: "CardWrapper",
  components: {
    WeatherCard
  },
  props: {
    weatherData: {
      type: Object
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
