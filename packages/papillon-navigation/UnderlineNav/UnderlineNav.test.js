import React from 'react';
import {
  underlineNav,
  underlineNavActions,
  underlineNavRight,
  underlineNavRightWithActions,
  underlineNavWithCounter
} from './UnderlineNav.render';

describe('<Navigation />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of UnderlineNav', () => {
      wrapper = renderMount(underlineNav);
      expect(wrapper.find('UnderlineNav')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match underlineNav', () => {
      expect(global.renderToJSON(underlineNav)).toMatchSnapshot();
    });

    test('must match underlineNavActions', () => {
      expect(global.renderToJSON(underlineNavActions)).toMatchSnapshot();
    });

    test('must match underlineNavRight', () => {
      expect(global.renderToJSON(underlineNavRight)).toMatchSnapshot();
    });

    test('must match underlineNavRightWithActions', () => {
      expect(global.renderToJSON(underlineNavRightWithActions)).toMatchSnapshot();
    });

    test('must match underlineNavWithCounter', () => {
      expect(global.renderToJSON(underlineNavWithCounter)).toMatchSnapshot();
    });
  });
});
