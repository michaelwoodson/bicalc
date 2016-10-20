<template>
  <div id="root">
    <header class="header">
      <h1>Basic income calculator</h1>
      <p>Pop: {{population | nicenumber}}</p>
      <alert type="success">
        Hello?
      </alert>
    </header>
    <section class="main">
      <input v-if="budgetItems.length"
        class="toggle-all"
        type="checkbox"
        v-model="checked"
        v-on:click="handleApplyAll"
        />
      <ul>
        <budget-item
          v-for="budgetItem in budgetItems"
          :budgetItem="budgetItem"
        ></budget-item>
      </ul>
      <footer class="footer">
        <span>
          <strong>{{availableCount || 'No'}}</strong> {{availableCount === 1 ? 'item' : 'items'}} left
        </span>
        <h1>${{basicIncome | money}} / Month</h1>
      </footer>
    </section>
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
    population () {
      return this.$store.state.population
    },
    basicIncome () {
      return this.$store.getters.basicIncome
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
