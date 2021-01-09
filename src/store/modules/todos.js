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

  async deleteTodo(context, id) {
    await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
    context.commit("removeTodo", id);
  },

  //NEW: Filter todos. this will just be another get request but with a limit
  async filterTodos(context, e) {
    /**
     * TESTING: these lines of console.log() were to see how Brad goes about deriving out the value of a selected option. What we need is the last line, but feel free to uncomment these logs to see what's going on:
     *
     * console.dir(e.target);
     * console.log(e.target.options);
     * console.dir(e.target.options[e.target.options.selectedIndex]);
     * console.log(e.target.options[e.target.options.selectedIndex].value);
     */

    const limit = e.target.options[e.target.options.selectedIndex].value;
    console.log(limit, typeof limit);

    // for brad, limit is a number, but for me, it is a string. It seems to work fine without any problems, donc je vais le laisser
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

    const data = response.data;

    context.commit("setTodos", data);
  },
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
