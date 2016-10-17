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
    slashed: false,
    id: idCounter++
  });
}

export default {
  [ActionTypes.SLASH_BUDGET_ITEM](state, id) {
    state.budgetItems = state.budgetItems.map(item =>
      item.id === id ?
        Object.assign({}, item, {slashed: !item.slashed}) :
        item
    );
  },
  [ActionTypes.SLASH_ALL](state) {
    const areAllSlashed = state.budgetItems.every(item => item.slashed);
    state.budgetItems = state.budgetItems.map(item => Object.assign({}, item, {
      slashed: !areAllSlashed
    }));
  }
};
