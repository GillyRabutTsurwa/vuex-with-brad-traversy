import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";

Vue.use(Vuex);

const store = new Vuex.Store({
  modules: {
    todos: todos,
  },
});

export default store;
