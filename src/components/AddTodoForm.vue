<template>
  <div>
    <h3>Add Todo</h3>
    <div class="form-container">
      <form @submit.prevent="addNewTodo">
        <input type="text" v-model="title" placeholder="Add Todo">
        <input type="submit" value="Submit">
      </form>
    </div>
  </div>
</template>

<script>
export default {
  name: "AddTodoForm",
  data() {
    return {
      title: "",
    };
  },
  methods: {
    //NEW:
    /** IMPORTANT:
     * When you add more than one todo, you will get an error in the console saying duplicate keys. On peut l'ignorer parce que on gere des données qui persistent pas. Donc lorsqu'on refrait le page, les todo qu'on a créée vont disparaitre
     */
    addNewTodo() {
      this.$store.dispatch("addTodo", this.title);
    },
  },
};
</script>

<style scoped>
.form-container {
  margin-bottom: 2rem;
}

form {
  display: flex;
}

input[type="text"] {
  flex: 10;
  padding: 1rem;
  border: 1px solid #41b883;
  outline: none;
}

input[type="submit"] {
  flex: 2;
  background-color: #41b883;
  color: #fff;
  border: 1px solid #41b883;
  cursor: pointer;
}
</style>
