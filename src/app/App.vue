<template>
  <div id="root" class="container">
    <nav class="navbar navbar-default">
      <h1 class="navbar-right">${{basicIncome | money}} / Month</h1>
      <h1>Basic income calculator</h1>
      <p>Pop: {{population | nicenumber}}</p>
    </nav>
    <div v-for="group in revenueGroups" class="card p-1">
      <b-collapse-toggle :target="group.id"><h3 class="toggler">{{group.label}}</h3></b-collapse-toggle>
      <b-collapse :id="group.id">
        Select: <a href="#" @click.prevent.stop="handleApply(group.id, true)">All</a> / <a href="" @click.prevent.stop="handleApply(group.id, false)">None</a>
        <budget-item v-for="budgetItem in group.items" :budgetItem="budgetItem"></budget-item>
      </b-collapse>
    </div>
    <footer class="footer">
      <span>
        <strong>{{availableCount || 'No'}}</strong> {{availableCount === 1 ? 'item' : 'items'}} left
      </span>
    </footer>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import BudgetItem from './BudgetItem.vue';

export default {
  name: 'App',
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters(['budgetItems', 'spendingCuts', 'taxPreferenceAdjustments', 'taxIncreases']),
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
    population () {
      return this.$store.state.population;
    },
    basicIncome () {
      return this.$store.getters.basicIncome;
    },
    revenueGroups() {
      return[
        {label: 'Spending Cuts', id: 'spendingCuts', items: this.spendingCuts},
        {label: 'Tax Preference Adjustments', id: 'taxPreferenceAdjustments', items: this.taxPreferenceAdjustments},
        {label: 'Tax Increases', id: 'taxIncreases', items: this.taxIncreases}
      ];
    }
  },
  methods: {
    ...mapActions(['apply']),
    handleApply(what, applied) {
      this.apply({what, applied});
    }
  },
  components: {
    'budget-item': BudgetItem
  }
};

</script>

<style>
  .toggler {
    cursor: pointer;
  }
</style>
