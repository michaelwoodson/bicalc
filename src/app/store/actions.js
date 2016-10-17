import * as types from '../constants/ActionTypes';

const makeAction = type => ({commit}, ...args) => commit(type, ...args);

export const slashBudgetItem = makeAction(types.SLASH_BUDGET_ITEM);
export const slashAll = makeAction(types.SLASH_ALL);
