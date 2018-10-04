import React from 'react';
import {
  labelDefault,
  design,
  labelThemeGray,
  labelThemeDarkGray,
  labelThemeOrange,
  labelOutline,
  labelOutlineGreen,
  state,
  stateThemes,
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

    test('must match labelThemeDarkGray', () => {
      expect(global.renderToJSON(labelThemeDarkGray)).toMatchSnapshot();
    });

    test('must match labelThemeOrange', () => {
      expect(global.renderToJSON(labelThemeOrange)).toMatchSnapshot();
    });

    test('must match labelOutline', () => {
      expect(global.renderToJSON(labelOutline)).toMatchSnapshot();
    });

    test('must match labelOutlineGreen', () => {
      expect(global.renderToJSON(labelOutlineGreen)).toMatchSnapshot();
    });

    test('must match state', () => {
      expect(global.renderToJSON(state)).toMatchSnapshot();
    });

    test('must match stateThemes', () => {
      expect(global.renderToJSON(stateThemes)).toMatchSnapshot();
    });
  });
});
