<template>
  <h4>{{ $route.params.city || 'City not specified' }}</h4>
  <CardWrapper :weather-data="weatherData" v-if="Object.keys(this.weatherData).length > 0" />
</template>

<script>
import WeatherService from "@/services/WeatherService";
import CardWrapper from "@/components/CardWrapper";

export default {
  name: "WeatherResult",
  data() {
    return {
      weatherData: {}
    }
  },
  components: {
    CardWrapper
  },
  watch: {
    "$route.params.city"(value) {
      const service = new WeatherService()

      service.getForecast(value)
        .then(res => {
          this.weatherData = res.data;
          console.log('lal', this.weatherData)
        })
    }
  },
  created() {
    const service = new WeatherService()

    service.getForecast(this.$route.params.city)
      .then(res => {
        this.weatherData = res.data;
        console.log('lal', this.weatherData)
      })
  }
}
</script>

<style scoped>

</style>
