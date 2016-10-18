import BudgetItem from './BudgetItem.vue';

describe('BudgetItem', () => {
  it('should have correct props', () => {
    expect(BudgetItem.props).toEqual(['budgetItem']);
  });

  describe('methods', () => {
    it('should call actions.applyBudgetItem', () => {
      const applyBudgetItem = jasmine.createSpy('applyBudgetItem');
      BudgetItem.applyBudgetItem = applyBudgetItem;
      BudgetItem.methods.handleChange.call(BudgetItem, 1);
      expect(applyBudgetItem).toHaveBeenCalledWith(1);
    });
  });
});
