<template>
  <section class="main">
    <input v-if="budgetItems.length"
      class="toggle-all"
      type="checkbox"
      v-model="checked"
      v-on:click="handleSlashAll"
      />
    <ul>
      <budget-item
        v-for="budgetItem in budgetItems.filter(selectedFilter.filter)"
        :budgetItem="budgetItem"
      ></budget-item>
    </ul>
    <footer-component v-if="budgetItems.length"
      :slashed-count="slashedCount"
      :active-count="activeCount"
      :selected-filter="selectedFilter"
      :on-show="handleShow"
    ></footer-component>
  </section>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import VisibilityFilters from '../constants/VisibilityFilters';
import BudgetItem from './BudgetItem.vue';
import Footer from './Footer.vue';

export default {
  name: 'MainSection',
  props: ['filter'],
  data() {
    return {
      mainFilter: this.filter
    };
  },
  computed: {
    ...mapGetters(['budgetItems']),
    checked() {
      return this.slashedCount === this.budgetItems.length;
    },
    slashedCount() {
      return this.budgetItems.reduce((count, item) =>
        item.slashed ? count + 1 : count,
        0
      );
    },
    activeCount() {
      return this.budgetItems.length - this.slashedCount;
    },
    selectedFilter() {
      return VisibilityFilters[this.mainFilter];
    }
  },
  methods: {
    ...mapActions(['slashAll']),
    handleSlashAll() {
      this.slashAll();
    },
    handleShow(filter) {
      this.mainFilter = filter;
    }
  },
  components: {
    'budget-item': BudgetItem,
    'footer-component': Footer
  }
};
</script>
