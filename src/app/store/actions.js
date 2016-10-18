import * as types from '../constants/ActionTypes';

const makeAction = type => ({commit}, ...args) => commit(type, ...args);

export const applyBudgetItem = makeAction(types.APPLY_BUDGET_ITEM);
export const applyAll = makeAction(types.APPLY_ALL);
