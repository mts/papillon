import React from 'react';
import {
  labelDefault,
  design,
  labelThemeGray,
} from './flavor';

describe('<Label />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Label', () => {
      wrapper = renderMount(labelDefault);
      expect(wrapper.find('Label')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match labelDefault', () => {
      expect(global.renderToJSON(labelDefault)).toMatchSnapshot();
    });

    test('must match design', () => {
      expect(global.renderToJSON(design)).toMatchSnapshot();
    });

    test('must match labelThemeGray', () => {
      expect(global.renderToJSON(labelThemeGray)).toMatchSnapshot();
    });
  });
});
