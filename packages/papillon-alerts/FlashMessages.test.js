import React from 'react';
import {
  flashMessages,
} from './FlashMessages.render';

describe('<FlashMessages />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of FlashMessages', () => {
      wrapper = renderShallow(flashMessages);
      expect(wrapper.find('FlashMessages')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match flashMessages', () => {
      expect(global.renderToJSON(flashMessages)).toMatchSnapshot();
    });
  });
});
