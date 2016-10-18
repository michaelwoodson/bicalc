import * as ActionTypes from '../constants/ActionTypes';

export const initialState = {
  population: 320000000,
  budgetItems: []
};

addItem('SNAP', 75000000000);
addItem('Other thing', 150000000000);

let idCounter = 0;
function addItem(text, cost) {
  initialState.budgetItems.push({
    text,
    cost,
    applied: false,
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
