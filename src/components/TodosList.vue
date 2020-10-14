<template>
  <div>
    <h3>Todos</h3>
    <div class="todo-list">
      <div v-for="currentTodo in allTodos" v-bind:key="currentTodo.id" class="todo-list__todo">
        {{currentTodo.title}}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  name: "TodosList",
  computed: mapGetters(["allTodos"]),
  created() {
    console.log(this.allTodos);
  },
};
</script>

<style scoped>
.todo-list {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.todo-list__todo {
  position: relative;
  border: 1px solid #ccc;
  background-color: #41b883;
  padding: 1rem;
  border-radius: 0.5rem;
  text-align: center;
  cursor: pointer;
}
</style>