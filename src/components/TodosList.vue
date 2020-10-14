<template>
  <div>
      Todos will go here
  </div>
</template>

<script>
import {mapActions} from "vuex";

export default {
  name: "TodoList",
  methods: mapActions(["fetchTodos"]),
  created() {
    this.fetchTodos();
  }
  
}
</script>

<style>

</style>