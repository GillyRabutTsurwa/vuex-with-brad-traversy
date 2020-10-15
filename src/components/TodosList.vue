<template>
  <div>
    <h3>Todos</h3>
    <div class="todo-list">
      <div v-for="currentTodo in allTodosArr" v-bind:key="currentTodo.id" class="todo-list__todo">
        {{currentTodo.title}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "TodosList",
  computed: {
    allTodosArr() {
      return this.$store.getters.allTodos;
    },
  },
  /** NOTE:
   * du même façon, actions are accessed using METHODS in vue. On va utiliser mapActions plus tard
   */
  methods: {
    getTodos() {
      // NOTENEWIMPORTANT: actions are triggered using the dispatch().
      this.$store.dispatch("fetchTodos");
    },
  },
  created() {
    console.log(this.$store);
    this.getTodos();
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