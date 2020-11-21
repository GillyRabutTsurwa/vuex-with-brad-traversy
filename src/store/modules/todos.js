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
  //NEW:
  newTodo: (state, newTodoPayLoad) => (state.todos = [newTodoPayLoad, ...state.todos]),
};

const actions = {
  async fetchTodos(context) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
    const data = response.data;
    console.log(data);
    context.commit("setTodos", data);
  },

  //NEW: This is the action for adding a new todo via using our form
  async addTodo(context, title) {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      title: title,
      completed: false,
    });
    const data = response.data;
    console.log(data);
    context.commit("newTodo", data);
  },
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
