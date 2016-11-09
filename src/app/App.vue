
<template>
  <div id="root" class="container">
    <nav class="navbar navbar-fixed-top navbar-light bg-faded">
      <span class="navbar-text">${{basicIncome | money}} / Month</span>
    </nav>
    <div class="row">
    <h1>Basic income calculator</h1>
    <div v-for="group in revenueGroups" class="card p-1">
      <b-collapse-toggle :target="group.type"><h3 class="toggler">{{group.label}} ({{countApplied(group.items)}}/{{group.items.length}})</h3></b-collapse-toggle>
      <b-collapse :id="group.type">
        Select: <a href="#" @click.prevent.stop="handleApply(group.type, true)">All</a> / <a href="" @click.prevent.stop="handleApply(group.type, false)">None</a>
        <budget-item v-for="budgetItem in group.items" :budgetItem="budgetItem"></budget-item>
      </b-collapse>
    </div>
    <p>Pop: {{adjustedPopulation | nicenumber}} of {{population | nicenumber}} <a href="" @click.prevent.stop="showPopConfig">&#x2699;</a></p>
    <b-modal id="help" ref="help">
      <div slot="modal-header">
        <h3>{{helpItem.text}}</h3>
      </div>
      <div slot="modal-body">
        <template v-if="helpItem.options">
          <h3>Options</h3>
          <ul>
            <li :class="{active: helpItem.amount === option.value}" v-for="option in helpItem.options">
              {{option.text}} {{option.value | nicenumber}} / year
            </li>
          </ul>
        </template>
        <h3 v-else>
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
    <b-modal id="population-config" ref="populationModal">
      <div slot="modal-header">
        <h3>Population Configuration</h3>
      </div>
      <div slot="modal-body">
          <h3>Total population: {{population | nicenumber}}</h3>
          <ul>
            <li v-for="pa in populationAdjustments">
              <label>
                <input type="checkbox" :checked="pa.excluded" @change="togglePopAdjustment(pa.id)"/>
                {{pa.name}} {{pa.size | nicenumber}}
              </label>
            </li>
          </ul>
          <h3>Adjusted population: {{adjustedPopulation | nicenumber}}</h3>
      </div>
      <div slot="modal-footer">
        <button class="btn btn-primary" @click.prevent.stop="hidePopConfig">Got it!</button>
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
    ...mapGetters([
      'spendingCuts',
      'taxPreferenceAdjustments',
      'taxIncreases',
      'population',
      'adjustedPopulation',
      'hash'
    ]),
    population () {
      return this.$store.state.population;
    },
    populationAdjustments () {
      return this.$store.state.populationAdjustments;
    },
    basicIncome () {
      return this.$store.getters.basicIncome;
    },
    revenueGroups() {
      return[
        {label: 'Spending Cuts', type: 'SPENDING_CUTS', items: this.spendingCuts},
        {label: 'Tax Preference Adjustments', type: 'TAX_PREFERENCE_ADJUSTMENTS', items: this.taxPreferenceAdjustments},
        {label: 'Tax Increases', type: 'TAX_INCREASES', items: this.taxIncreases}
      ];
    }
  },
  methods: {
    ...mapActions(['apply', 'togglePopAdjustment']),
    handleApply(type, applied) {
      this.apply({type, applied});
    },
    countApplied(items) {
      return items.filter(item => item.applied).length;
    },
    hideHelp() {
      this.$refs.help.hide();
    },
    showPopConfig() {
      this.$refs.populationModal.show();
    },
    hidePopConfig() {
      this.$refs.populationModal.hide();
    }
  },
  components: {
    'budget-item': BudgetItem
  },
  watch: {
    hash(value) {
      window.location.hash = value;
    }
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
  .active {
    font-weight: bold;
  }
</style>
