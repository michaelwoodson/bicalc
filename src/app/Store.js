import Vue from 'vue';
import Vuex from 'vuex';
import * as ActionTypes from './ActionTypes';
import * as actions from './actions';
import bigInt from 'big-integer';

Vue.use(Vuex);

// Federal employees:
// https://www.opm.gov/policy-data-oversight/data-analysis-documentation/federal-employment-reports/historical-tables/total-government-employment-since-1962/
// Social security recipients:
// https://www.ssa.gov/policy/docs/quickfacts/stat_snapshot/
// Incarcerated population:
// https://en.wikipedia.org/wiki/Incarceration_in_the_United_States
// Child population:
// https://www.census.gov/quickfacts/table/PST045215/00
const CBO_OUTLOOK = 'CBO_OUTLOOK';
const CBO_BUDGET_OPTIONS = 'CBO_BUDGET_OPTIONS';
const BIGGEST_TAX_BREAKS = 'BIGGEST_TAX_BREAKS';
const CARBON_TAX = 'CARBON_TAX';
const POPULATION = 325000000;
const HALF_CHILDREN = POPULATION * 0.229 * 0.5;

const SPENDING_CUTS = 'SPENDING_CUTS';
const TAX_PREFERENCE_ADJUSTMENTS = 'TAX_PREFERENCE_ADJUSTMENTS';
const TAX_INCREASES = 'TAX_INCREASES';

let paCounter = 0;
const initialState = {
  population: POPULATION,
  budgetItems: [],
  populationAdjustments: [
    {
      id: paCounter++,
      name: 'Exclude federal employees',
      size: 4185000,
      excluded: true,
      help: 'Reduce federal salaries by the amount of the basic income.'
    },
    {
      id: paCounter++,
      name: 'Exclude Social Security recipients',
      size: 65764000,
      excluded: true,
      help: 'Reduce social security payments by the amount of the basic income.'
    },
    {
      id: paCounter++,
      name: 'Exclude incarcerated',
      size: 2220300,
      excluded: true,
      help: 'Since living expenses are already paid.'
    },
    {
      id: paCounter++,
      name: 'Exclude half children',
      size: HALF_CHILDREN,
      excluded: false,
      help: 'Child population split into two so you can figure a 50% basic income for children.'
    },
    {
      id: paCounter++,
      name: 'Exclude half children',
      size: HALF_CHILDREN,
      excluded: false,
      help: 'Child population split into two so you can figure a 50% basic income for children.'
    }
  ],
  sources: {
    [CBO_OUTLOOK]: {
      name: 'CBO Budget and Economic Outlook: 2016 to 2026',
      url: 'https://www.cbo.gov/sites/default/files/114th-congress-2015-2016/reports/51908-2016_Outlook_Update_OneCol-2.pdf'
    },
    [CBO_BUDGET_OPTIONS]: {
      name: 'CBO Options for Reducing the Deficit: 2015 to 2024',
      url: 'https://www.cbo.gov/sites/default/files/cbofiles/attachments/49638-BudgetOptions.pdf'
    },
    [BIGGEST_TAX_BREAKS]: {
      name: 'PewResearchCenter: The biggest U.S. tax breaks',
      url: 'http://www.pewresearch.org/fact-tank/2016/04/06/the-biggest-u-s-tax-breaks/'
    },
    [CARBON_TAX]: {
      name: 'Carbon Tax Center: FAQs',
      url: 'http://www.carbontax.org/faqs/'
    }
  }
};

// CBO Outlook 2017
const MILITARY_TOTAL = 592;
const adjustments = {
  spendingCuts: [
    {
      text: 'Supplemental Nutrition Assistance Program',
      amount: 71,
      source: CBO_OUTLOOK,
      note: 'Page 76'
    },
    {
      text: 'Supplemental Security Income',
      amount: 56,
      source: CBO_OUTLOOK,
      note: 'Page 76'
    },
    {
      text: 'Unemployment compensation',
      amount: 32,
      source: CBO_OUTLOOK,
      note: 'Page 76, note: unemployment has its own tax that would need to be maintained.'
    },
    {
      text: 'Family support and foster care',
      amount: 32,
      source: CBO_OUTLOOK,
      note: 'Page 76'
    },
    {
      text: 'Child nutrition',
      amount: 24,
      source: CBO_OUTLOOK,
      note: 'Page 76'
    },
    {
      text: 'Reduce Funding for International Affairs Programs',
      amount: 10,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 28, Page 19'
    },
    {
      text: 'Eliminate Human Space Exploration Programs',
      amount: 8,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 29, Page 19'
    },
    {
      text: 'Limit Highway Funding to Expected Highway Revenues',
      amount: 7.5,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 33, Page 21'
    },
    {
      text: 'Reduce the Size of the Federal Workforce Through Attrition',
      amount: 4,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 42, Page 25'
    },
    {
      text: 'Eliminate the Add-On to Pell Grants That Is Funded With Mandatory Spending',
      amount: 7.5,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 6, Page 8'
    },
    {
      text: 'Eliminate Concurrent Receipt of Retirement Pay and Disability Compensation for Disabled Veterans',
      amount: 10,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 7, Page 9'
    },
    {
      text: 'Military (Discretionary)',
      options: [
        {text: '10%', value: 0.1 * MILITARY_TOTAL},
        {text: '20%', value: 0.2 * MILITARY_TOTAL},
        {text: '50%', value: 0.5 * MILITARY_TOTAL},
        {text: '80%', value: 0.8 * MILITARY_TOTAL}
      ],
      source: CBO_OUTLOOK,
      note: 'Page 78'
    }
  ],
  taxPreferenceAdjustments: [
    {
      text: 'End earned income, child, and other tax credits',
      amount: 86,
      source: CBO_OUTLOOK,
      note: 'Page 76'
    },
    /* {
      text: 'Employer-paid health care, health insurance, and long-term care insurance',
      amount: 143.8,
      source: BIGGEST_TAX_BREAKS
    },*/
    {
      text: 'End lower tax rates on dividends and long-term capital gains',
      amount: 134.6,
      source: BIGGEST_TAX_BREAKS
    },
    {
      text: 'End deferal of active income of controlled foreign corporations',
      amount: 108.9,
      source: BIGGEST_TAX_BREAKS
    },
    {
      text: 'End deductibility of contributions to and earnings of defined-contribution retirement plans',
      amount: 82.7,
      source: BIGGEST_TAX_BREAKS
    },
    {
      text: 'End mortgage interest deduction for owner occupied residences',
      amount: 77.0,
      source: BIGGEST_TAX_BREAKS
    },
    {
      text: 'Eliminate the deduction for state and local taxes',
      amount: 100,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 51, Page 32'
    },
    {
      text: 'End deductibility of contirbutions to and earnings of defined-benefit pension plans',
      amount: 57.4,
      source: BIGGEST_TAX_BREAKS
    },
    {
      text: 'Subsidies for insurance purchased through health benefit exchanges',
      amount: 53.5,
      source: BIGGEST_TAX_BREAKS
    },
    {
      text: 'Increase the Maximum Taxable Earnings for the Social Security Payroll Tax',
      amount: 65,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 60, Page 39'
    },
    {
      text: 'Use an alternative measure of inflation to index Social Security and other mandatory programs',
      amount: 15,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 21, Page 16'
    },
    {
      text: 'Curtail the deduction for charitable giving',
      amount: 20,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 52, Page 32'
    },
    {
      text: 'Include all income that U.S. citizens earn abroad in taxable income',
      amount: 9,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 54, Page 34'
    },
    {
      text: 'Tax Social Security and railroad retirement benefits in the same way that distributions from defined benefit pensions are taxed',
      amount: 38,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 55, Page 35'
    },
    {
      text: 'Eliminate certain tax preferences for education expenses',
      amount: 12,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 58, Page 37'
    },
    {
      text: 'Extend the period for depreciating the cost of certain investments',
      amount: 22,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 66, Page 44'
    },
    {
      text: 'Repeal the deduction for domestic production activities',
      amount: 19,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 67, Page 44'
    }
  ],
  taxIncreases: [
    {
      text: 'Increase individual income tax rates',
      options: [
        {text: '1%', value: 65},
        {text: '2%', value: 130},
        {text: '5%', value: 325},
        {text: '10%', value: 650}
      ],
      source: CBO_BUDGET_OPTIONS,
      warn: 'This increases taxes by percentage points e.g. 1 percentage point from 25% to 26%, not 25% to 25.25%!',
      note: 'Option 46, Page 29'
    },
    {
      text: 'Increase corporate income tax rates',
      options: [
        {text: '1%', value: 10},
        {text: '2%', value: 20},
        {text: '5%', value: 50},
        {text: '10%', value: 100}
      ],
      source: CBO_BUDGET_OPTIONS,
      warn: 'This increases taxes by percentage points e.g. 1 percentage point from 25% to 26%, not 25% to 25.25%!',
      note: 'Option 63, Page 42'
    },
    {
      text: 'Increase excise taxes on motor fuels by 35 cents and index for inflation',
      amount: 45,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 70, Page 46'
    },
    {
      text: 'Increase all taxes on alcoholic beverages to $16 per proof gallon',
      amount: 6.5,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 71, Page 46'
    },
    {
      text: 'Increase the excise tax on cigarettes by 50 cents per pack',
      amount: 3.2,
      source: CBO_BUDGET_OPTIONS,
      note: 'Option 79, Page 53'
    },
    {
      text: 'Carbon tax',
      amount: 80,
      source: CARBON_TAX,
      note: 'Faq. #15'
    }
  ]
};

let idCounter = 0;

adjustments.spendingCuts.forEach(a => addSpendingCut(a));
adjustments.taxPreferenceAdjustments.forEach(a => addTaxPreferenceAdjustment(a));
adjustments.taxIncreases.forEach(a => addTaxIncrease(a));

function addSpendingCut(data) {
  data.type = SPENDING_CUTS;
  addItem(data);
}

function addTaxPreferenceAdjustment(data) {
  data.type = TAX_PREFERENCE_ADJUSTMENTS;
  addItem(data);
}

function addTaxIncrease(data) {
  data.type = TAX_INCREASES;
  addItem(data);
}

function addItem({text, amount: amountBillions, options, note, source, type, warn}) {
  const item = {
    text,
    amount: amountBillions * 1000000000,
    applied: false,
    id: idCounter++,
    note,
    source,
    type,
    warn
  };
  if (options) {
    item.options = options;
    options.forEach(o => {
      o.value *= 1000000000;
    });
    item.amount = options[0].value;
  }
  initialState.budgetItems.push(item);
}

const BASE = 36;

if (window.location.hasOwnProperty('hash') && window.location.hash.length > 7) {
  const split = window.location.hash.substring(1).split('_');
  if (split.length === 4) {
    const [version, encodedBudgetItems, encodedOptions, encodedPop] = split;
    if (version === '0') {
      const itemsBigInt = bigInt(encodedBudgetItems, BASE);
      initialState.budgetItems.forEach((item, index) => {
        item.applied = getBit(itemsBigInt, index);
      });
      const optionsBigInt = bigInt(encodedOptions, BASE);
      initialState.budgetItems.filter(item => item.hasOwnProperty('options')).forEach((item, index) => {
        const optionIndex = optionsBigInt.shiftRight(index * 3).and(bigInt(7)).toJSNumber();
        item.amount = item.options[optionIndex].value;
      });
      const popBigInt = bigInt(encodedPop, BASE);
      initialState.populationAdjustments.forEach((p, index) => {
        p.excluded = getBit(popBigInt, index);
      });
    }
  }
}

function getBit(n, index) {
  return n.shiftRight(index).isOdd();
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
    [ActionTypes.TOGGLE_POP_ADJUSTMENT](state, id) {
      state.populationAdjustments = state.populationAdjustments.map(item =>
        item.id === id ?
          Object.assign({}, item, {excluded: !item.excluded}) :
          item
      );
    },
    [ActionTypes.APPLY](state, data) {
      state.budgetItems = state.budgetItems.map(item => item.type === data.type ? Object.assign({}, item, {
        applied: data.applied
      }) : item);
    }
  },
  actions,
  getters: {
    spendingCuts: state => state.budgetItems.filter(item => item.type === SPENDING_CUTS),
    taxPreferenceAdjustments: state => state.budgetItems.filter(item => item.type === TAX_PREFERENCE_ADJUSTMENTS),
    taxIncreases: state => state.budgetItems.filter(item => item.type === TAX_INCREASES),
    adjustedPopulation: state => state.population - state.populationAdjustments.filter(a => a.excluded).map(a => a.size).reduce((a1, a2) => a1 + a2, 0),
    basicIncome: (state, getters) => {
      return state.budgetItems
        .filter(item => item.applied)
        .map(item => item.amount)
        .reduce((a1, a2) => a1 + a2, 0) / getters.adjustedPopulation / 12;
    },
    hash: state => {
      const encodedBudgetItems = state.budgetItems.map(item => item.applied ? bigInt.one.shiftLeft(item.id) : bigInt.zero).reduce((b1, b2) => b1.add(b2), bigInt.zero).toString(36);
      const encodedOptions = state.budgetItems
        .filter(item => item.hasOwnProperty('options'))
        .map((item, i) => {
          const optionIndex = item.options.findIndex(o => o.value === item.amount);
          return bigInt(optionIndex).shiftLeft(i * 3);
        })
        .reduce((b1, b2) => b1.add(b2), bigInt.zero).toString(BASE);
      const encodedPop = state.populationAdjustments.map(p => p.excluded ? bigInt.one.shiftLeft(p.id) : bigInt.zero).reduce((b1, b2) => b1.add(b2), bigInt.zero).toString(36);
      return `0_${encodedBudgetItems}_${encodedOptions}_${encodedPop}`;
    }
  }
});
