<template>
  <div id="app">
    <img src="./assets/img/vuex-logo.png" class="logo" alt="Vuex logo">
    <TodosList/>
  </div>
</template>

<script>
import TodosList from './components/TodosList.vue'

export default {
  name: 'App',
  components: {
    TodosList: TodosList
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
