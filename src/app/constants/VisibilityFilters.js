import {SHOW_ALL, SHOW_SLASHED, SHOW_ACTIVE} from './BudgetItemFilters';

function showAll() {
  return true;
}

function showSlashed(item) {
  return item.slashed;
}

function showActive(item) {
  return !item.slashed;
}

export default {
  [SHOW_ALL]: {filter: showAll, type: SHOW_ALL},
  [SHOW_SLASHED]: {filter: showSlashed, type: SHOW_SLASHED},
  [SHOW_ACTIVE]: {filter: showActive, type: SHOW_ACTIVE}
};
