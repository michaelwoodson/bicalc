<template>
  <div v-bind:class="{'applied': budgetItem.applied}">
    <label class="view">
      <input
        class="toggle"
        type="checkbox"
        v-model="budgetItem.applied"
        v-on:click="handleChange(budgetItem.id)"
        />
      {{budgetItem.text}}
    </label>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'BudgetItem',
  props: ['budgetItem'],
  data() {
    return {
    };
  },
  methods: {
    ...mapActions(['applyBudgetItem']),
    handleChange(id) {
      this.applyBudgetItem(id);
    },
  }
};
</script>
