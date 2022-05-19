<template>
  <MainHeader />
  <HelloWorld msg="First look at vue js app"/>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import MainHeader from '@/components/Header'

export default {
  name: 'App',
  components: {
    MainHeader,
    HelloWorld
  }
}
</script>

<style>
html, body {
  margin: 0;
  padding: 0;
  background-color: #333;
}
</style>
