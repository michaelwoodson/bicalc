import {SHOW_ALL, SHOW_APPLIED, SHOW_AVAILABLE} from './BudgetItemFilters';

function showAll() {
  return true;
}

function showApplied(item) {
  return item.applied;
}

function showAvailable(item) {
  return !item.applied;
}

export default {
  [SHOW_ALL]: {filter: showAll, type: SHOW_ALL},
  [SHOW_APPLIED]: {filter: showApplied, type: SHOW_APPLIED},
  [SHOW_AVAILABLE]: {filter: showAvailable, type: SHOW_AVAILABLE}
};
