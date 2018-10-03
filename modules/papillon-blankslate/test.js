import React from 'react';
import {
  blankslate,
  blankslateIcon,
  blankslateNarrow,
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

    test('must match blankslateIcon', () => {
      expect(global.renderToJSON(blankslateIcon)).toMatchSnapshot();
    });

    test('must match blankslateNarrow', () => {
      expect(global.renderToJSON(blankslateNarrow)).toMatchSnapshot();
    });
  });
});
