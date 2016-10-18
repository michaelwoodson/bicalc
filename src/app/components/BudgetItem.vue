<template>
  <li v-bind:class="{'slashed': budgetItem.slashed}">
    <label class="view" v-if="!editing">
      <input
        class="toggle"
        type="checkbox"
        v-model="budgetItem.slashed"
        v-on:click="handleChange(budgetItem.id)"
        />
      {{budgetItem.text}}
    </label>
  </li>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  name: 'BudgetItem',
  props: ['budgetItem'],
  data() {
    return {
      editing: false
    };
  },
  methods: {
    ...mapActions(['slashBudgetItem']),
    handleChange(id) {
      this.slashBudgetItem(id);
    },
  }
};
</script>
