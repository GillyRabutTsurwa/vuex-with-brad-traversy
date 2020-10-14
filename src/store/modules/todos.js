const state = {
	todos: [
		{
			id: 1,
			title: "Téléphoner mama"
		},
		{
			id: 2,
			title: "Faire les vaisselles"
		},
		{
			id: 3,
			title: "Finir mon app de Vuex"
		}
	]
};

const getters = {
	allTodos: (state) => state.todos
};

const mutations = {};

const actions = {};

export default {
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
};
