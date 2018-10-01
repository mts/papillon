import React from 'react';
import { shallow } from 'enzyme';

import {
  flashAlertDefault,
  multipleParagraphs,
  flashMessages,
  flashWarn,
  flashError
} from './flavors';

const renderShallow = () => {
  return shallow(flashAlertDefault);
};

describe('<FlashAlert />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of FlashAlert', () => {
      wrapper = renderShallow();
      expect(wrapper.find('FlashAlert')).toBeTruthy();
    });
  });

  describe('Snaphot', () => {
    test('must match flashAlertDefault', () => {
      expect(global.renderToJSON(flashAlertDefault)).toMatchSnapshot();
    });

    test('must match multipleParagraphs', () => {
      expect(global.renderToJSON(multipleParagraphs)).toMatchSnapshot();
    });

    test('must match flashMessages', () => {
      expect(global.renderToJSON(flashMessages)).toMatchSnapshot();
    });

    test('must match flashWarn', () => {
      expect(global.renderToJSON(flashWarn)).toMatchSnapshot();
    });

    test('must match flashError', () => {
      expect(global.renderToJSON(flashError)).toMatchSnapshot();
    });
  });
});
