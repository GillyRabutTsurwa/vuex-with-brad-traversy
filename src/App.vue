<template>
  <div id="app">
    <img src="./assets/img/vuex-logo.png" class="logo" alt="Vuex logo">
    <Bienvenue msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Bienvenue from './components/Bienvenue.vue'

export default {
  name: 'App',
  components: {
    Bienvenue: Bienvenue
  }
}
</script>

<style>
@import url(./App.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.logo {
  width: 35rem;
}
</style>
