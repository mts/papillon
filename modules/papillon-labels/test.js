import React from 'react';
import {
  labelDefault,
} from './flavor';

describe('<Button />', () => {
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
  });
});
