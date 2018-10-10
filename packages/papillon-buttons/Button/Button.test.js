import {
  btn,
  link,
  btnSmall,
  btnPrimary,
  btnSecondary,
  btnDanger,
  btnOutline,
  btnBlue,
  btnPurple,
  btnLarge,
  btnLink,
} from './Button.render';

describe('<Button />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Button', () => {
      wrapper = renderMount(btn);
      expect(wrapper.find('Button')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match btn', () => {
      expect(global.renderToJSON(btn)).toMatchSnapshot();
    });

    test('must match link', () => {
      expect(global.renderToJSON(link)).toMatchSnapshot();
    });

    test('must match btnSmall', () => {
      expect(global.renderToJSON(btnSmall)).toMatchSnapshot();
    });

    test('must match btnPrimary', () => {
      expect(global.renderToJSON(btnPrimary)).toMatchSnapshot();
    });

    test('must match btnSecondary', () => {
      expect(global.renderToJSON(btnSecondary)).toMatchSnapshot();
    });

    test('must match btnDanger', () => {
      expect(global.renderToJSON(btnDanger)).toMatchSnapshot();
    });

    test('must match btnOutline', () => {
      expect(global.renderToJSON(btnOutline)).toMatchSnapshot();
    });

    test('must match btnBlue', () => {
      expect(global.renderToJSON(btnBlue)).toMatchSnapshot();
    });

    test('must match btnPurple', () => {
      expect(global.renderToJSON(btnPurple)).toMatchSnapshot();
    });

    test('must match btnLarge', () => {
      expect(global.renderToJSON(btnLarge)).toMatchSnapshot();
    });

    test('must match btnLink', () => {
      expect(global.renderToJSON(btnLink)).toMatchSnapshot();
    });
  });
});
