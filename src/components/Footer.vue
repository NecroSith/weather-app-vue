<template>
  <footer class="fixed--full-width">
    <a href="https://www.flaticon.com/free-icons/weather" title="weather icons">Weather icons created by Freepik - Flaticon</a>
  </footer>
</template>

<script>
export default {
  name: 'MainFooter'
}
</script>

<style scoped>
  footer {
    bottom: 0;
    background: green;
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  footer > a {
    color: white;
  }
</style>
