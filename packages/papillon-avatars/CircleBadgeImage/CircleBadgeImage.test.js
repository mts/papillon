import React from 'react';
import {
  circleBadgeSmallImage,
  circleBadgeMediumImage,
  circleBadgeLargeImage,
} from './CircleBadgeImage.render';

describe('<Avatar />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of CircleBadgeImage', () => {
      wrapper = renderMount(circleBadgeSmallImage);
      expect(wrapper.find('CircleBadgeImage')).toHaveLength(1);
    });

    test('must be an instance of CircleBadgeImage', () => {
      wrapper = renderMount(circleBadgeMediumImage);
      expect(wrapper.find('CircleBadgeImage')).toHaveLength(1);
    });

    test('must be an instance of CircleBadgeImage', () => {
      wrapper = renderMount(circleBadgeLargeImage);
      expect(wrapper.find('CircleBadgeImage')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match circleBadgeSmallImage', () => {
      expect(global.renderToJSON(circleBadgeSmallImage)).toMatchSnapshot();
    });

    test('must match circleBadgeMediumImage', () => {
      expect(global.renderToJSON(circleBadgeMediumImage)).toMatchSnapshot();
    });

    test('must match circleBadgeLargeImage', () => {
      expect(global.renderToJSON(circleBadgeLargeImage)).toMatchSnapshot();
    });
  });
});
