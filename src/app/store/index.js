import Vue from 'vue';
import Vuex from 'vuex';
import mutations, {initialState as state} from './mutations';
import * as actions from './actions';

Vue.use(Vuex);

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters: {
    spendingCuts: state => state.spendingCuts,
    taxPreferenceAdjustments: state => state.taxPreferenceAdjustments,
    taxIncreases: state => state.taxIncreases,
    adjustedPopulation: state => state.population - state.federalEmployees - state.socialSecurityRecipients - state.incarcerated,
    budgetItems: state => [...state.spendingCuts, ...state.taxPreferenceAdjustments, ...state.taxIncreases],
    basicIncome: (state, getters) => {
      return getters.budgetItems
        .filter(item => item.applied)
        .map(item => item.amount)
        .reduce((a1, a2) => a1 + a2, 0) / getters.adjustedPopulation / 12;
    }
  }
});
