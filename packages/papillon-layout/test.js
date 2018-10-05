import React from 'react';
import {
  container,
  centered,
  grid
} from './flavor';

describe('<Layout />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Container', () => {
      wrapper = renderMount(container);
      expect(wrapper.find('Container')).toHaveLength(1);
    });

    test('must be an instance of Centered', () => {
      wrapper = renderMount(centered);
      expect(wrapper.find('Centered')).toHaveLength(1);
    });

    test('must be an instance of Grid', () => {
      wrapper = renderMount(grid);
      expect(wrapper.find('Grid')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match container', () => {
      expect(global.renderToJSON(container)).toMatchSnapshot();
    });

    test('must match centered', () => {
      expect(global.renderToJSON(centered)).toMatchSnapshot();
    });

    test('must match grid', () => {
      expect(global.renderToJSON(grid)).toMatchSnapshot();
    });
  });
});
