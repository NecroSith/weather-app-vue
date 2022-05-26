<template>
  <div>test</div>
</template>

<script>
import WeatherService from "@/services/WeatherService";

export default {
  name: "WeatherResult",
  created() {
    const service = new WeatherService()

    service.getForecast(this.$route.params.city)
      .then(res => {
        console.log(res)
      })
  }
}
</script>

<style scoped>

</style>
