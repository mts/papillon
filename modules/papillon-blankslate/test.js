import React from 'react';
import {
  blankslate,
} from './flavor';

describe('<Blankslate />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Blankslate', () => {
      wrapper = renderMount(blankslate);
      expect(wrapper.find('Blankslate')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match blankslate', () => {
      expect(global.renderToJSON(blankslate)).toMatchSnapshot();
    });
  });
});
