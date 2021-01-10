<template>
  <div>
    <h3>Todos</h3>
    <div class="legend">
      <span>Double click to mark as complete</span>
      <span>
        <span class="incomplete-box"></span> = Incomplete
      </span>
      <span>
        <span class="complete-box"></span> = Complete
      </span>
    </div>

    <div class="todo-list">
      <div @dblclick="onDoubleClick(currentTodo)" v-for="currentTodo in allTodosArr" v-bind:key="currentTodo.id" v-bind:class="{'is-complete': currentTodo.completed}" class="todo-list__todo">
        {{currentTodo.title.charAt(0).toUpperCase() + currentTodo.title.slice(1)}}
        <!-- The one above est si je veux le majusculer la phrase. Mais c'est trop -->
        <!-- {{currentTodo.title}} -->
        <i v-on:click="supprimerTodo(currentTodo.id)" class="fas fa-trash-alt"></i>
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
      this.$store.dispatch("fetchTodos");
    },
    supprimerTodo(id) {
      this.$store.dispatch("deleteTodo", id);
    },
    //NEW: function that runs when we double click  a todo
    onDoubleClick(todo) {
      //NOTE: we are making a new todo out of the existing todo object
      const updatedTodo = {
        // id stays the same
        id: todo.id,
        // le titre aussi
        title: todo.title,
        // mais on change la valeur de "completed". elle sera son inverse.
        completed: !todo.completed,
      };
      // then we are executing the store action with our new updated todo as our arguement
      this.$store.dispatch("updateTodo", updatedTodo);
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
  padding: 2rem;
}

i {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  color: #fff;
  cursor: pointer;
}

.legend {
  display: flex;
  justify-content: space-around;
  margin-bottom: 1rem;
}
.complete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #35495e;
}
.incomplete-box {
  display: inline-block;
  width: 10px;
  height: 10px;
  background: #41b883;
}

.is-complete {
  background: #35495e;
  color: #fff;
}

@media (max-width: 500px) {
  .todos {
    grid-template-columns: 1fr;
  }
}
</style>