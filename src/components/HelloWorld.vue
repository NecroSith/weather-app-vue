<template>
  <div class="hello">
    <h1>Welcome to the weather forecast app!</h1>
    <h4>Enter the city in the header input and see the results</h4>
    <WeatherResult v-if="$route.params.city" />
  </div>
</template>

<script>
import WeatherResult from "@/components/Result";

export default {
  name: 'HelloWorld',
  components: {
    WeatherResult
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
