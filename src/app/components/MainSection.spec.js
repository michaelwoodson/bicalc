import MainSection from './MainSection.vue';

describe('MainSection', () => {
  it('should have correct props', () => {
    expect(MainSection.props).toEqual(['filter']);
  });

  describe('computed properties', () => {
    beforeEach(() => {
      MainSection.state = {
        budgetItems: [{text: 'Use Redux', applied: false, id: 0}]
      };
    });

    it('should return true', () => {
      MainSection.appliedCount = 1;
      MainSection.budgetItems = MainSection.state.budgetItems;
      expect(MainSection.computed.checked.call(MainSection)).toEqual(true);
    });

    it('should return 0', () => {
      MainSection.budgetItems = MainSection.state.budgetItems;
      expect(MainSection.computed.appliedCount.call(MainSection)).toEqual(0);
    });

    it('should return 1', () => {
      MainSection.budgetItems = MainSection.state.budgetItems;
      MainSection.appliedCount = 0;
      expect(MainSection.computed.availableCount.call(MainSection)).toEqual(1);
    });

    it(`should return 'show_all'`, () => {
      MainSection.mainFilter = 'show_all';
      expect(MainSection.computed.selectedFilter.call(MainSection).type).toEqual('show_all');
    });
  });

  describe('methods', () => {
    it('should call actions.applyAll', () => {
      const applyAll = jasmine.createSpy('applyAll');
      MainSection.applyAll = applyAll;
      MainSection.methods.handleapplyAll.call(MainSection);
      expect(applyAll).toHaveBeenCalled();
    });

    it('should set this.filter', () => {
      MainSection.methods.handleShow.call(MainSection, 'show_applied');
      expect(MainSection.mainFilter).toEqual('show_applied');
    });
  });
});
