import Footer from './Footer.vue';

describe('Footer', () => {
  it('should have correct props', () => {
    expect(Footer.props).toEqual(['activeCount', 'appliedCount', 'selectedFilter', 'onShow']);
  });

  it('should return filterTitles and filters', () => {
    expect(Object.keys(Footer.data())).toEqual(['filterTitles', 'filters']);
  });
});
