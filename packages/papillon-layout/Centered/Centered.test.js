import centered from './Centered.render';

describe('<Layout />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Centered', () => {
      wrapper = renderMount(centered);
      expect(wrapper.find('Centered')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match centered', () => {
      expect(global.renderToJSON(centered)).toMatchSnapshot();
    });
  });
});
