<template>
  <footer class="footer">
    <span>
      <strong>{{availableCount || 'No'}}</strong> {{availableCount === 1 ? 'item' : 'items'}} left
    </span>
    <ul class="filters">
      <li v-for="filter in filters">
        <a v-bind:style="{cursor: 'pointer'}" v-bind:class="{'selected': filter === selectedFilter.type}" v-on:click="onShow(filter)">{{filterTitles[filter]}}</a>
      </li>
    </ul>
    <h1>${{basicIncome | money}} / Month</h1>
  </footer>
</template>

<script>
import {mapActions} from 'vuex';
import {SHOW_ALL, SHOW_APPLIED, SHOW_AVAILABLE} from '../constants/BudgetItemFilters';

const filterTitles = {
  [SHOW_ALL]: 'All',
  [SHOW_AVAILABLE]: 'Available',
  [SHOW_APPLIED]: 'Applied'
};

const filters = [SHOW_ALL, SHOW_AVAILABLE, SHOW_APPLIED];

export default {
  name: 'Footer',
  props: ['availableCount', 'appliedCount', 'selectedFilter', 'onShow'],
  data() {
    return {filterTitles, filters};
  },
  computed: {
    basicIncome () {
      return this.$store.getters.basicIncome
    }
  }
};
</script>
