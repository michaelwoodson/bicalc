import Vue from 'vue';
import Vuex from 'vuex';
import * as ActionTypes from './ActionTypes';
import * as actions from './actions';

Vue.use(Vuex);

// Federal employees:
// https://www.opm.gov/policy-data-oversight/data-analysis-documentation/federal-employment-reports/historical-tables/total-government-employment-since-1962/
// Social security recipients:
// https://www.ssa.gov/policy/docs/quickfacts/stat_snapshot/
// Incarcerated population:
// https://en.wikipedia.org/wiki/Incarceration_in_the_United_States
export const initialState = {
  population: 325000000,
  federalEmployees: 4185000,
  socialSecurityRecipients: 65764000,
  incarcerated: 2220300,
  budgetItems: [],
  spendingCuts: [],
  taxPreferenceAdjustments: [],
  taxIncreases: []
};

// CBO Outlook 2017
const MILITARY_TOTAL = 592;
addSpendingCut('Military (Discretionary)', 0.1 * MILITARY_TOTAL, [
  {text: '10%', value: 0.1 * MILITARY_TOTAL},
  {text: '20%', value: 0.2 * MILITARY_TOTAL},
  {text: '50%', value: 0.5 * MILITARY_TOTAL},
  {text: '80%', value: 0.8 * MILITARY_TOTAL}
]);
addSpendingCut('Disability Insurance', 154);
addSpendingCut('Supplemental Nutrition Assistance Program', 76);
addSpendingCut('Supplemental Security Income', 57);
// Note that unemployment has a revenue stream.'
addSpendingCut('Unemployment compensation', 37);
addSpendingCut('Family support and foster care', 32);
addSpendingCut('Child nutrition', 23);
addSpendingCut('Reduce Funding for International Affairs Programs (28)', 10);
addSpendingCut('Eliminate Human Space Exploration Programs (29)', 8);
addSpendingCut('Limit Highway Funding to Expected Highway Revenues (33)', 7.5);
addSpendingCut('Reduce the Size of the Federal Workforce Through Attrition (42)', 4);
addSpendingCut('Eliminate the Add-On to Pell Grants That Is Funded With Mandatory Spending (6)', 7.5);
addSpendingCut('Eliminate Concurrent Receipt of Retirement Pay and Disability Compensation for Disabled Veterans (7)', 10);
// CBO Outlook 2017
// addSpendingCut('Social Security - Old-Age and Survivors Insurance', 817);

// http://www.pewresearch.org/fact-tank/2016/04/06/the-biggest-u-s-tax-breaks/
// addTaxPreferenceAdjustment('Employer-paid health care, health insurance, and long-term care insurance', 143.8);
addTaxPreferenceAdjustment('Lower tax rates on dividends and long-term capital gains', 134.6);
addTaxPreferenceAdjustment('Deferal of active income of controlled foreign corporations', 108.9);
addTaxPreferenceAdjustment('Contributions to and earnings of defined-contribution retirement plans', 82.7);
addTaxPreferenceAdjustment('Mortgage interest deduction for owner occupied residences', 77.0);
addTaxPreferenceAdjustment('Deductibility of (nonbusiness) state and local income, sales, and personal property taxes', 65.1);
addTaxPreferenceAdjustment('Contirbutions to and earnings of defined-benefit pension plans', 57.4);
addTaxPreferenceAdjustment('Subsidies for insurance purchased through health benefit exchanges', 53.5);

// CBO Outlook 2017
addTaxPreferenceAdjustment('Increase the Maximum Taxable Earnings for the Social Security Payroll Tax (60)', 65);
addTaxPreferenceAdjustment('Earned income, child, and other tax credits', 90);
addTaxPreferenceAdjustment('Use an Alternative Measure of Inflation to Index Social Security and Other Mandatory Programs (21)', 15);
addTaxPreferenceAdjustment('Curtail the Deduction for Charitable Giving (52)', 20);
addTaxPreferenceAdjustment('Include All Income That U.S. Citizens Earn Abroad in Taxable Income (54)', 9);
addTaxPreferenceAdjustment('Tax Social Security and Railroad Retirement Benefits in the Same Way That Distributions From Defined Benefit Pensions Are Taxed (55)', 38);
addTaxPreferenceAdjustment('Eliminate Certain Tax Preferences for Education Expenses (58)', 12);
addTaxPreferenceAdjustment('Extend the Period for Depreciating the Cost of Certain Investments (66)', 22);
addTaxPreferenceAdjustment('Repeal the Deduction for Domestic Production Activities (67)', 19);

addTaxIncrease('Increase Individual Income Tax Rates (46)', 65, [
  {text: '1%', value: 65},
  {text: '2%', value: 130},
  {text: '5%', value: 325},
  {text: '10%', value: 650}
]);
addTaxIncrease('Increase Corporate Income Tax Rates by 1 Percentage Point (63)', 10, [
  {text: '1%', value: 10},
  {text: '2%', value: 20},
  {text: '5%', value: 50},
  {text: '10%', value: 100}
]);
addTaxIncrease('Increase Excise Taxes on Motor Fuels by 35 Cents and Index for Inflation (45)', 45);
addTaxIncrease('Increase All Taxes on Alcoholic Beverages to $16 per Proof Gallon (71)', 6.5);
addTaxIncrease('Increase the Excise Tax on Cigarettes by 50 Cents per Pack (79)', 3.2);

let idCounter = 0;

function addSpendingCut(text, amountBillions, options) {
  initialState.spendingCuts.push(addItem(text, amountBillions, options));
}

function addTaxPreferenceAdjustment(text, amountBillions, options) {
  initialState.taxPreferenceAdjustments.push(addItem(text, amountBillions, options));
}

function addTaxIncrease(text, amountBillions, options) {
  initialState.taxIncreases.push(addItem(text, amountBillions, options));
}

function addItem(text, amountBillions, options) {
  const item = {
    text,
    amount: amountBillions * 1000000000,
    applied: true,
    id: idCounter++
  };
  if (options) {
    item.options = options;
    options.forEach(o => {
      o.value *= 1000000000;
    });
  }
  initialState.budgetItems.push(item);
  return item;
}

export default new Vuex.Store({
  state: initialState,
  mutations: {
    [ActionTypes.APPLY_BUDGET_ITEM](state, id) {
      state.budgetItems = state.budgetItems.map(item =>
        item.id === id ?
          Object.assign({}, item, {applied: !item.applied}) :
          item
      );
    },
    [ActionTypes.APPLY](state, data) {
      state[data.what] = state[data.what].map(item => Object.assign({}, item, {
        applied: data.applied
      }));
    }
  },
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
