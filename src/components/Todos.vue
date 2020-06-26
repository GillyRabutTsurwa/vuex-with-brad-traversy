<template>
  <div>
    <h1>Todos</h1>
    <span v-for="(currentTodo, index) in myTodos" v-bind:key="index">{{currentTodo.title}}</span>
  </div>
</template>

<script>
export default {
  name: "Todos",
  computed: {
    myTodos() {
      return this.$store.getters.allTodos;
    }
  },
  created() {
    let vuexData = this.$store.state;
    console.log(vuexData);
  }
};
</script>

<style>
</style>