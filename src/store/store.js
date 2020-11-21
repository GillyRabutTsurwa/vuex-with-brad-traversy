import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";

// Load Vuex
Vue.use(Vuex);

// Create store
const store = new Vuex.Store({
  modules: {
    todos: todos,
  },
});

// Export the store where we will use in the app entry point, main.js
export default store;
