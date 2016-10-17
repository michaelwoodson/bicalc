<template>
  <header class="header">
    <h1>Basic income calculator</h1>
    <p>Pop: {{320000000 | nicenumber}}</p>
  </header>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'Header'
};
</script>
