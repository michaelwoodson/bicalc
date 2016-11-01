
<template>
  <div id="root" class="container">
    <nav class="navbar navbar-fixed-top navbar-light bg-faded">
      <span class="navbar-text">${{basicIncome | money}} / Month</span>
    </nav>
    <div class="row">
    <h1>Basic income calculator</h1>
    <div v-for="group in revenueGroups" class="card p-1">
      <b-collapse-toggle :target="group.id"><h3 class="toggler">{{group.label}} ({{countApplied(group.items)}}/{{group.items.length}})</h3></b-collapse-toggle>
      <b-collapse :id="group.id">
        Select: <a href="#" @click.prevent.stop="handleApply(group.id, true)">All</a> / <a href="" @click.prevent.stop="handleApply(group.id, false)">None</a>
        <budget-item v-for="budgetItem in group.items" :budgetItem="budgetItem"></budget-item>
      </b-collapse>
    </div>
    <p>Pop: {{population | nicenumber}} <button @click.prevent.stop="showHelp">?</button></p>
    <b-modal id="help" ref="help">
      <div slot="modal-header">
        <h3>{{helpItem.text}}</h3>
      </div>
      <div slot="modal-body">
        <h3 ng-if="!helpItem.options">
        {{helpItem.amount | nicenumber}} / year
        </h3>
        <p v-if="helpItem.source">
          Source: <a :href="sources[helpItem.source].url" target="_blank">{{sources[helpItem.source].name}}</a>
          <span v-if="helpItem.note">({{helpItem.note}})</span>
        </p>
      </div>
      <div slot="modal-footer">
        <button class="btn btn-primary" @click.prevent.stop="hideHelp">Got it!</button>
      </div>
    </b-modal>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import BudgetItem from './BudgetItem.vue';

export default {
  name: 'App',
  data() {
    return {
      sources: this.$store.state.sources,
      helpItem: {}
    };
  },
  created: function () {
    this.$root.$on('showhelp', (item) => {
      this.helpItem = item;
      this.$refs.help.show();
    });
  },
  computed: {
    ...mapGetters(['budgetItems', 'spendingCuts', 'taxPreferenceAdjustments', 'taxIncreases']),
    checked() {
      return this.appliedCount === this.budgetItems.length;
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
    },
    countApplied(items) {
      return items.filter(item => item.applied).length;
    },
    hideHelp() {
      this.$refs.help.hide();
    }
  },
  components: {
    'budget-item': BudgetItem
  }
};

</script>

<style>
  label, .toggler {
    cursor: pointer;
  }
  body { 
    padding-top: 65px; 
  }
</style>
