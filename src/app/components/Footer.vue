<template>
  <footer class="footer">
    <span>
      <strong>{{activeCount || 'No'}}</strong> {{activeCount === 1 ? 'item' : 'items'}} left
    </span>
    <ul class="filters">
      <li v-for="filter in filters">
        <a v-bind:style="{cursor: 'pointer'}" v-bind:class="{'selected': filter === selectedFilter.type}" v-on:click="onShow(filter)">{{filterTitles[filter]}}</a>
      </li>
    </ul>
  </footer>
</template>

<script>
import {mapActions} from 'vuex';
import {SHOW_ALL, SHOW_SLASHED, SHOW_ACTIVE} from '../constants/BudgetItemFilters';

const filterTitles = {
  [SHOW_ALL]: 'All',
  [SHOW_ACTIVE]: 'Active',
  [SHOW_SLASHED]: 'Slashed'
};

const filters = [SHOW_ALL, SHOW_ACTIVE, SHOW_SLASHED];

export default {
  name: 'Footer',
  props: ['activeCount', 'slashedCount', 'selectedFilter', 'onShow'],
  data() {
    return {filterTitles, filters};
  }
};
</script>
