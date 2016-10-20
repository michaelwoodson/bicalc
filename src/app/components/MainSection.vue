<template>
  <section class="main">
    <input v-if="budgetItems.length"
      class="toggle-all"
      type="checkbox"
      v-model="checked"
      v-on:click="handleApplyAll"
      />
    <ul>
      <budget-item
        v-for="budgetItem in budgetItems.filter(selectedFilter.filter)"
        :budgetItem="budgetItem"
      ></budget-item>
    </ul>
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
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import VisibilityFilters from '../constants/VisibilityFilters';
import BudgetItem from './BudgetItem.vue';
import {SHOW_ALL, SHOW_APPLIED, SHOW_AVAILABLE} from '../constants/BudgetItemFilters';

const filterTitles = {
  [SHOW_ALL]: 'All',
  [SHOW_AVAILABLE]: 'Available',
  [SHOW_APPLIED]: 'Applied'
};

const filters = [SHOW_ALL, SHOW_AVAILABLE, SHOW_APPLIED];

export default {
  name: 'MainSection',
  props: ['filter'],
  data() {
    return {
      filterTitles,
      filters,
      mainFilter: this.filter
    };
  },
  computed: {
    ...mapGetters(['budgetItems']),
    checked() {
      return this.appliedCount === this.budgetItems.length;
    },
    appliedCount() {
      return this.budgetItems.reduce((count, item) =>
        item.applied ? count + 1 : count,
        0
      );
    },
    availableCount() {
      return this.budgetItems.length - this.appliedCount;
    },
    selectedFilter() {
      return VisibilityFilters[this.mainFilter];
    },
    basicIncome () {
      return this.$store.getters.basicIncome
    }
  },
  methods: {
    ...mapActions(['applyAll']),
    handleApplyAll() {
      this.applyAll();
    },
    onShow(filter) {
      this.mainFilter = filter;
    }
  },
  components: {
    'budget-item': BudgetItem
  }
};
</script>
