<template>
  <div id="root" class="container">
    <nav class="navbar navbar-default">
      <h1 class="navbar-right">${{basicIncome | money}} / Month</h1>
      <h1>Basic income calculator</h1>
      <p>Pop: {{population | nicenumber}}</p>
    </nav>
    <label>
      <input v-if="budgetItems.length"
        class="toggle-all"
        type="checkbox"
        v-model="checked"
        v-on:click="handleApplyAll"
        />
      Select all/none
    </label>
    <accordion v-for="group in revenueGroups" :one-at-atime="checked" type="info">
      <panel :header="group.label">
        <budget-item
          v-for="budgetItem in group.items"
          :budgetItem="budgetItem"
        ></budget-item>
      </panel>
    </accordion>
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
        {label: 'Spending Cuts', items: this.spendingCuts},
        {label: 'Tax Preference Adjustments', items: this.taxPreferenceAdjustments},
        {label: 'Tax Increases', items: this.taxIncreases}
      ];
    }
  },
  methods: {
    ...mapActions(['applyAll']),
    handleApplyAll() {
      this.applyAll();
    }
  },
  components: {
    'budget-item': BudgetItem
  }
};

</script>
