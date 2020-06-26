import Vuex from "vuex";
import Vue from "vue";
import todos from "./modules/todos";

// Load Vuex
Vue.use(Vuex);

// Create Store
export const store = new Vuex.Store({
    // our data, which would be inside our folder would go here... like the way Net Ninja did it. 
    // With brad, we are going to put our data in a separate location (./modules/todos) and are going to require it here.
    // Acutally, not just our state (data) can go there, but our mutations, actions, and getters can all go there. Net Ninja simply does all of this in one location.
    modules: {
        todos: todos
    }
})