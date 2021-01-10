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
  removeTodo: (state, todoIdPayload) =>
    (state.todos = state.todos.filter((currentTodo) => currentTodo.id !== todoIdPayload)),
  // NEW: updating todo
  mettreAJourTodo: (state, updatedTodoPayload) => {
    // we need the index of the updated todo
    const updatedTodoIndex = state.todos.findIndex((currentTodo) => currentTodo.id === updatedTodoPayload.id);
    console.log(updatedTodoIndex);
    // check if the index exists
    if (updatedTodoIndex !== -1) {
      // replace the todo in this index (and only this one) with the updated todo
      state.todos.splice(updatedTodoIndex, 1, updatedTodoPayload);
    }
  },
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

  async filterTodos(context, e) {
    const limit = e.target.options[e.target.options.selectedIndex].value;
    console.log(limit, typeof limit);

    // for brad, limit is a number, but for me, it is a string. It seems to work fine without any problems, donc je vais le laisser
    const response = await axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`);

    const data = response.data;

    context.commit("setTodos", data);
  },

  // NEW: updating a todo
  async updateTodo(context, updatedTodo) {
    // for this one, we are using a put request to update our desired todo
    const response = await axios.put(`https://jsonplaceholder.typicode.com/todos/${updatedTodo.id}`, updatedTodo);
    context.commit("mettreAJourTodo", response.data);
  },
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
