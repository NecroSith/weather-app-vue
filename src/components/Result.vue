<template>
  <h4>{{ $route.params.city || 'City not specified' }}</h4>
  <MainSpinner v-if="!isLoaded" />
  <CardWrapper :weather-data="weatherData"
               v-if="isLoaded && Object.keys(this.weatherData).length > 0" />
</template>

<script>
import WeatherService from "@/services/WeatherService";
import CardWrapper from "@/components/CardWrapper";
import MainSpinner from "@/components/Spinner";

export default {
  name: "WeatherResult",
  data() {
    return {
      weatherData: {},
      isLoaded: false
    }
  },
  components: {
    CardWrapper,
    MainSpinner
  },
  watch: {
    "$route.params.city"(value) {
      this.isLoaded = false;
      const service = new WeatherService()

      service.getForecast(value)
        .then(res => {
          this.weatherData = res.data;
          console.log('lal', this.weatherData);
          this.isLoaded = true;
        })
    }
  },
  created() {
    const service = new WeatherService()

    service.getForecast(this.$route.params.city)
      .then(res => {
        this.weatherData = res.data;
        console.log('lal', this.weatherData)
        this.isLoaded = true;
      })
  }
}
</script>

<style scoped>

</style>
