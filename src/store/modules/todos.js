// where we put all our state, getters, mutations and actions

const state = {
    todos: [{
            id: 1,
            title: "Wash the dog"
        },
        {
            id: 2,
            title: "Walk Cat"
        }
    ]
}

const getters = {
    allTodos: (state) => state.todos
}

const mutations = {

}

const actions = {

}

export default {
    state: state,
    getters: getters,
    mutations: mutations,
    actions: actions
}