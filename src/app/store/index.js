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
    budgetItems: state => state.budgetItems,
    adjustedPopulation: state => state.population - state.federalEmployees - state.socialSecurityRecipients - state.incarcerated,
    basicIncome: (state, getters) => {
      return state.budgetItems
        .filter(item => item.applied)
        .map(item => item.amount)
        .reduce((a1, a2) => a1 + a2, 0) / getters.adjustedPopulation / 12;
    }
  }
});
