import React from 'react';
import {
  menu,
  menuWithIconAvatarCounter,
  menuWithHeading
} from './flavorMenu';
import {
  underlineNav,
  underlineNavActions
} from './flavorUnderlineNav';

describe('<Navigation />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Menu', () => {
      wrapper = renderMount(menu);
      expect(wrapper.find('Menu')).toHaveLength(1);
    });

    test('must be an instance of UnderlineNav', () => {
      wrapper = renderMount(underlineNav);
      expect(wrapper.find('UnderlineNav')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match menu', () => {
      expect(global.renderToJSON(menu)).toMatchSnapshot();
    });

    test('must match menuWithIconAvatarCounter', () => {
      expect(global.renderToJSON(menuWithIconAvatarCounter)).toMatchSnapshot();
    });

    test('must match menuWithHeading', () => {
      expect(global.renderToJSON(menuWithHeading)).toMatchSnapshot();
    });

    test('must match underlineNav', () => {
      expect(global.renderToJSON(underlineNav)).toMatchSnapshot();
    });

    test('must match underlineNavActions', () => {
      expect(global.renderToJSON(underlineNavActions)).toMatchSnapshot();
    });
  });
});
