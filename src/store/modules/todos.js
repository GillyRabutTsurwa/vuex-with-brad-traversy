import axios from "axios";

const state = {};

const getters = {};

const mutations = {};

const actions = {
	async fetchTodos() {
		const response = await axios.get("https://jsonplaceholder.typicode.com/todos");
		console.log(response);
		const data = response.data;
		console.log(data);
	}
};

export default {
	state: state,
	getters: getters,
	mutations: mutations,
	actions: actions
};
