import React from 'react';
import {
  btn,
  link,
  btnPrimary
} from './flavor';

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

    test('must match btnPrimary', () => {
      expect(global.renderToJSON(btnPrimary)).toMatchSnapshot();
    });
  });
});
