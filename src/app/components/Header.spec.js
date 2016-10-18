import Header from './Header.vue';

describe('Header', () => {
  describe('methods', () => {
    it('should call this.addTodo', () => {
      const addTodo = jasmine.createSpy('applyAll');
      Header.addTodo = addTodo;
      Header.methods.handleSave.call(Header, 'test');
      expect(addTodo).toHaveBeenCalledWith('test');
    });
  });
});
