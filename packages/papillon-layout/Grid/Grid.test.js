import React from 'react';
import {
  grid,
} from './Grid.render';

describe('<Layout />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Grid', () => {
      wrapper = renderMount(grid);
      expect(wrapper.find('Grid')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match grid', () => {
      expect(global.renderToJSON(grid)).toMatchSnapshot();
    });
  });
});
