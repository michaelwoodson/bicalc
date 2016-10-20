import * as ActionTypes from '../ActionTypes';

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
  budgetItems: []
};

addItem('Eliminate SNAP', 75);
addItem('Eliminate Child Tax Credit', 52);
addItem('Eliminate the Add-On to Pell Grants That Is Funded With Mandatory Spending (6)', 7.5);
addItem('Eliminate Concurrent Receipt of Retirement Pay and Disability Compensation for Disabled Veterans (7)', 10);
addItem('Reduce Social Security Benefits for New Beneficiaries by 15 Percent (16)', 15);
addItem('Use an Alternative Measure of Inflation to Index Social Security and Other Mandatory Programs (21)', 15);
addItem('Reduce Funding for International Affairs Programs (28)', 10);
addItem('Eliminate Human Space Exploration Programs (29)', 8);
addItem('Limit Highway Funding to Expected Highway Revenues (33)', 7.5);
addItem('Reduce the Size of the Federal Workforce Through Attrition (42)', 4);
addItem('Increase Individual Income Tax Rates (46)', 65);
addItem('Increase Individual Income Tax Rates (46)', 65);
addItem('Increase Individual Income Tax Rates (46)', 65);
addItem('Increase Individual Income Tax Rates (46)', 65);
addItem('Increase Individual Income Tax Rates (46)', 65);
addItem('Curtail the Deduction for Charitable Giving (52)', 20);
addItem('Include All Income That U.S. Citizens Earn Abroad in Taxable Income (54)', 9);
addItem('Tax Social Security and Railroad Retirement Benefits in the Same Way That Distributions From Defined Benefit Pensions Are Taxed (55)', 38);
addItem('Eliminate Certain Tax Preferences for Education Expenses (58)', 12);
addItem('Increase the Maximum Taxable Earnings for the Social Security Payroll Tax (60)', 65);
addItem('Increase the Payroll Tax Rate for Medicare Hospital Insurance by 1 Percentage Point (61)', 75);
addItem('Increase Corporate Income Tax Rates by 1 Percentage Point (63)', 10);
addItem('Increase Corporate Income Tax Rates by 1 Percentage Point (63)', 10);
addItem('Increase Corporate Income Tax Rates by 1 Percentage Point (63)', 10);
addItem('Increase Corporate Income Tax Rates by 1 Percentage Point (63)', 10);
addItem('Increase Corporate Income Tax Rates by 1 Percentage Point (63)', 10);
addItem('Extend the Period for Depreciating the Cost of Certain Investments (66)', 22);
addItem('Repeal the Deduction for Domestic Production Activities (67)', 19);
addItem('Increase Excise Taxes on Motor Fuels by 35 Cents and Index for Inflation (45)', 45);
addItem('Increase All Taxes on Alcoholic Beverages to $16 per Proof Gallon (71)', 6.5);
addItem('Increase the Excise Tax on Cigarettes by 50 Cents per Pack (79)', 3.2);

let idCounter = 0;
function addItem(text, amountBillions) {
  initialState.budgetItems.push({
    text,
    amount: amountBillions * 1000000000,
    applied: true,
    id: idCounter++
  });
}

export default {
  [ActionTypes.APPLY_BUDGET_ITEM](state, id) {
    state.budgetItems = state.budgetItems.map(item =>
      item.id === id ?
        Object.assign({}, item, {applied: !item.applied}) :
        item
    );
  },
  [ActionTypes.APPLY_ALL](state) {
    const areAllApplied = state.budgetItems.every(item => item.applied);
    state.budgetItems = state.budgetItems.map(item => Object.assign({}, item, {
      applied: !areAllApplied
    }));
  }
};
