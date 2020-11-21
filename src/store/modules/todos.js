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

  //NEW:
  async addTodo(context, title) {
    const response = await axios.post("https://jsonplaceholder.typicode.com/todos", {
      //IDEA: on configure le id du nouveau poste de todo pour ne plus afficher cette erreur des clées dupliquées
      //FAIL: id: Math.random(), ca marche pas. L'erreur persiste pour le moment
      // C'est pas grave du tout. On avance.
      id: Math.random() * 10000000,
      title: title,
      completed: false,
    });
    const data = response.data;
    console.log(data);
    console.log(data.id);
    context.commit("newTodo", data);
  },
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
