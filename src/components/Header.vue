<template>
  <div class="header fixed--full-width">
    <div class="header-wrapper">
      <a href="/" title="To the main page" class="header__logo">
        <img src="../assets/weather-news.png" alt="weather logo">
      </a>
      <div class="header__input">
        <input type="text" placeholder="Enter the city" onkeydown="searchWeather()">
      </div>
      <nav class="header__menu">
        <ul>
          <li>
            <router-link to="/">Main</router-link>
          </li>
          <li>
            <router-link to="/about">About</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainHeader',
  data() {
    return {
      cityToFind: ''
    }
  }
}
</script>

<style scoped>
  .header {
    background: green;
    height: 50px;
    display: flex;
    align-items: center;
    top: 0;
  }
  .header-wrapper {
    display: flex;
    justify-content: space-between;
    width: 1140px;
    margin: 0 auto;
  }
  .header__logo img {
    width: 30px;
  }
  .header__menu {
    padding-top: 5px;
  }
  .header__menu ul {
    display: flex;
    column-gap: 30px;
  }
  .header__menu ul li a {
    color: white;
    text-decoration: none;
  }
  .header__menu ul li a:hover {
    color: orange;
  }
</style>
