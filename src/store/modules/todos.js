import axios from "axios";

const state = {
  todos: [],
};

const getters = {
  allTodos: (state) => state.todos,
};

// mutations are responsible for reactively changing our state.
// mutations, just like getters, accept the state as the first argument.
// the second argument is the value that the original state might be changing to. This is formally known as a payload.
// IMPORTANT: mutations are called using actions (which are below)
// IMPORTANT: therefore think of the payload as a parametre. So when we call our mutation using an action, this payload corresponds to the data that we want to pass to the mutation, the payload, which is then the data that changes the original state.
const mutations = {
  // add todos that we are fetching from our action fetchTods() to our state, and putting it in our state.todos array
  setTodos: (state, todosPayLoad) => (state.todos = todosPayLoad),
};

// actions are used for calling mutations. actions are generally functions that call the mutation, along with the data that we want to pass through.
// we do this using the context parametre, which is an object that gives us access to the store, and we call the commit method that takes in 1. the name of the mutation (exact), and 2. the data we want to pass through.
const actions = {
  async fetchTodos(context) {
    const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
    console.log(response);
    const data = response.data;
    console.log(data);
    context.commit("setTodos", data);
  },
};

export default {
  state: state,
  getters: getters,
  mutations: mutations,
  actions: actions,
};
