<template>
  <MainHeader />
  <router-view></router-view>
  <MainFooter />
</template>

<script>
import MainHeader from '@/components/Header'
import MainFooter from '@/components/Footer'

export default {
  name: 'App',
  components: {
    MainHeader,
    MainFooter
  },
  created() {
    this.$router.push('/')
  }
}
</script>

<style>
  html, body {
    padding: 50px 0 40px 0;
    background-color: #333;
    text-align: center;
    color: #fff;
    margin: 0;
  }
  ul {
    margin: 0;
    padding: 0;
  }
  ul li {
    list-style-type: none;
  }
  .fixed--full-width {
    position: fixed;
    width: 100%;
  }
</style>
