<template>
  <div id="app">
    <img class="logo" alt="Vue logo" src="./assets/logo.png" />
    <div class="container">
      <Todos />
    </div>
  </div>
</template>

<script>
import Todos from "./components/Todos";
export default {
  name: "App",
  components: {
    Todos: Todos
  }
};
</script>

<style>
@import "./App.css";
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  font-size: 1.6rem;
}

.logo {
  position: fixed;
  top: 0.5em;
  left: 0.5em;
  height: 2em;
}

.container {
  max-width: 110rem;
  margin: auto;
  overflow: auto;
  padding: 0 5rem;
}
</style>
