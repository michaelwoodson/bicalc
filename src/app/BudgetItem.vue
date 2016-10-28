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
    <select v-if="budgetItem.options" v-model="budgetItem.amount">
      <option v-for="option in budgetItem.options" :value="option.value">{{option.text}}</option>
    </select>
    <button class="btn" @click.prevent.stop="help(budgetItem)">?</button>
  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'BudgetItem',
  props: ['budgetItem'],
  methods: {
    ...mapActions(['applyBudgetItem']),
    handleChange(id) {
      this.applyBudgetItem(id);
    },
    help(item) {
      this.$root.$emit('showhelp', item);
    }
  }
};
</script>
