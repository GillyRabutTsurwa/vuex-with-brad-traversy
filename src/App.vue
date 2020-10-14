<template>
  <div id="app">
    <div class="container">
      <p>Je suis arrêté à 26:35</p>
      <TodosList />
    </div>
  </div>
</template>

<script>
import TodosList from "./components/TodosList.vue";
export default {
  name: "App",
  components: {
    TodosList: TodosList,
  },
};
</script>

<style>
@import url(./App.css);
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  font-size: 1.6rem;
  color: #2c3e50;
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
.logo {
  width: 35rem;
}
</style>
