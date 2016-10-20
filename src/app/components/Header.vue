<template>
  <header class="header">
    <h1>Basic income calculator</h1>
    <p>Pop: {{population | nicenumber}}</p>
    <alert type="success">
      Hello?
    </alert>
  </header>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'Header',
  computed: {
    population () {
      return this.$store.state.population
    }
  }
};
</script>
