import React from 'react';
import {
  menu,
} from './flavor';

describe('<Navigation />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Menu', () => {
      wrapper = renderMount(menu);
      expect(wrapper.find('Menu')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match menu', () => {
      expect(global.renderToJSON(menu)).toMatchSnapshot();
    });
  });
});
