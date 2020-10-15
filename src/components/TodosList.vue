<template>
  <div>
    <h3>Todos</h3>
    <div class="todo-list">
      <!-- NOTE: simply rendering our list of todos -->
      <div v-for="currentTodo in allTodosArr" v-bind:key="currentTodo.id" class="todo-list__todo">
        {{currentTodo.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodosList",
  /** NOTE:
   * getters are accessed using the computed property.
   * we are not using mapGetters yet. On va l'utiliser vers la fin de la création de l'appli.
   */
  computed: {
    allTodosArr() {
      return this.$store.getters.allTodos;
    },
  },
  created() {
    console.log(this.allTodosArr);
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