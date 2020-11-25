/** NOTEIMPORTANT
 * Consulter la branche derriere s'il te faut rechauffer la tête de ce qui se passe ici. Surtout au sujet des mutations et actions
 */
import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

const mutations = {
  setTodos: (state, todosPayLoad) => (state.todos = todosPayLoad),
  newTodo: (state, newTodoPayLoad) => (state.todos = [newTodoPayLoad, ...state.todos]),
  //NEW:
  removeTodo: (state, todoIdPayload) =>
    (state.todos = state.todos.filter((currentTodo) => currentTodo.id !== todoIdPayload)),
};

const actions = {
  async fetchTodos(context) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
    const data = response.data;
    console.log(data);
    context.commit("setTodos", data);
  },

  async addTodo(context, title) {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false,
    });
    const data = response.data;
    console.log(data);
    context.commit("newTodo", data);
  },

  // NEW: Delete todo
  async deleteTodo(context, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    context.commit("removeTodo", id);
  },
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
