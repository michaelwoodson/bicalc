import App from './App.vue';

describe('App', () => {
  it('should have correct props', () => {
    expect(App.props).toEqual(['filter']);
  });

  describe('computed properties', () => {
    beforeEach(() => {
      App.state = {
        budgetItems: [{text: 'Use Redux', applied: false, id: 0}]
      };
    });

    it('should return true', () => {
      App.appliedCount = 1;
      App.budgetItems = App.state.budgetItems;
      expect(App.computed.checked.call(App)).toEqual(true);
    });

    it('should return 0', () => {
      App.budgetItems = App.state.budgetItems;
      expect(App.computed.appliedCount.call(App)).toEqual(0);
    });

    it('should return 1', () => {
      App.budgetItems = App.state.budgetItems;
      App.appliedCount = 0;
      expect(App.computed.availableCount.call(App)).toEqual(1);
    });

    it(`should return 'show_all'`, () => {
      App.mainFilter = 'show_all';
      expect(App.computed.selectedFilter.call(App).type).toEqual('show_all');
    });
  });

  describe('methods', () => {
    it('should call actions.applyAll', () => {
      const applyAll = jasmine.createSpy('applyAll');
      App.applyAll = applyAll;
      App.methods.handleapplyAll.call(App);
      expect(applyAll).toHaveBeenCalled();
    });

    it('should set this.filter', () => {
      App.methods.handleShow.call(App, 'show_applied');
      expect(App.mainFilter).toEqual('show_applied');
    });
  });
});
