import React from 'react';
import {
  circleBadgeDashedConnection,
} from './CircleBadgeDashedIcon.render';

describe('<Avatar />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of CircleBadgeDashedConnection', () => {
      wrapper = renderMount(circleBadgeDashedConnection);
      expect(wrapper.find('CircleBadgeDashedConnection')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match circleBadgeDashedConnection', () => {
      expect(global.renderToJSON(circleBadgeDashedConnection)).toMatchSnapshot();
    });
  });
});
