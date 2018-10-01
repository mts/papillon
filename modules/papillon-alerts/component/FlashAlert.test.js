import React from 'react';
import { shallow } from 'enzyme';
import {
  flashAlertDefault,
  flashAlertMultipleParagraphs
} from './stories';

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
    test('must match flashAlertMultipleParagraphs', () => {
      expect(global.renderToJSON(flashAlertMultipleParagraphs)).toMatchSnapshot();
    });
  });
});
