import mutations from './mutations';
import * as types from './ActionTypes';

describe('budget items reducer', () => {
  it('should handle SLASH_BUDGET_ITEM', () => {
    const slashBudgetItem = mutations[types.SLASH_BUDGET_ITEM];
    const state = {budgetItems: [
      {
        text: 'Item 1',
        slashed: false,
        cost: 100,
        id: 1
      }, {
        text: 'Item 0',
        slashed: false,
        cost: 200,
        id: 0
      }
    ]};
    slashBudgetItem(state, 1);
    expect(state.budgetItems).toEqual([
      {
        text: 'Item 1',
        slashed: true,
        cost: 100,
        id: 1
      }, {
        text: 'Item 0',
        slashed: false,
        cost: 200,
        id: 0
      }
    ]);
  });

  it('should handle SLASH_ALL', () => {
    const slashAll = mutations[types.SLASH_ALL];
    const state = {todos: [
      {
        text: 'Item 1',
        slashed: true,
        id: 1
      }, {
        text: 'Item 0',
        slashed: false,
        id: 0
      }
    ]};
    slashAll(state);
    expect(state.budgetItems).toEqual([
      {
        text: 'Item 1',
        slashed: true,
        cost: 100,
        id: 1
      }, {
        text: 'Item 0',
        slashed: true,
        cost: 200,
        id: 0
      }
    ]);

    // Unmark if all budget items are currently slashed
    slashAll(state);
    expect(state.todos).toEqual([
      {
        text: 'Item 1',
        slashed: false,
        id: 1
      }, {
        text: 'Item 0',
        slashed: false,
        id: 0
      }
    ]);
  });
});
