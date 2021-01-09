<template>
  <div>
    <span>Filter Todos</span>
    <select @change="filterTodos($event)">
      <option value="200">200</option>
      <option value="100">100</option>
      <option value="50">50</option>
      <option value="20">20</option>
      <option value="10">10</option>
      <option value="5">5</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "TodosFilter",
  methods: {
    filterTodos(e) {
      this.$store.dispatch("filterTodos", e);
    },
  },
};
</script>

<style scoped>
select {
  margin-top: 2rem;
  padding: 0.6rem;
  border: 1p solid #41b883;
}
</style>
