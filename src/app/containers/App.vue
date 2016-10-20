<template>
  <div id="root">
    <header class="header">
      <h1>Basic income calculator</h1>
      <p>Pop: {{population | nicenumber}}</p>
      <alert type="success">
        Hello?
      </alert>
    </header>
    <main-section :filter="filter"></main-section>
  </div>
</template>

<script>
import MainSection from '../components/MainSection.vue';
import {SHOW_ALL} from '../constants/BudgetItemFilters';

export default {
  name: 'App',
  data() {
    return {
      filter: SHOW_ALL
    };
  },
  components: {
    'main-section': MainSection
  },
  computed: {
    population () {
      return this.$store.state.population
    }
  }
};
</script>
