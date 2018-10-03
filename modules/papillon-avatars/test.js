import React from 'react';
import {
  avatar,
  avatarSmall,
  avatarParentChild,
  avatarStackMore,
  avatarStackThreePlus,
  avatarStackTwo,
  avatarStackRight,
  circleBadgeSmallIcon,
  circleBadgeSmallImage,
  circleBadgeMediumIcon,
  circleBadgeMediumImage,
  circleBadgeLargeIcon,
  circleBadgeLargeImage,
  circleBadgeDashedConnection
} from './flavor';

describe('<Avatar />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of Avatar', () => {
      wrapper = renderMount(avatar);
      expect(wrapper.find('Avatar')).toHaveLength(1);
    });

    test('must be an instance of AvatarParentChild', () => {
      wrapper = renderMount(avatarParentChild);
      expect(wrapper.find('AvatarParentChild')).toHaveLength(1);
    });

    test('must be an instance of CircleBadge', () => {
      wrapper = renderMount(circleBadgeSmallIcon);
      expect(wrapper.find('CircleBadge')).toHaveLength(1);
    });

    test('must be an instance of CircleBadgeIcon', () => {
      wrapper = renderMount(circleBadgeSmallIcon);
      expect(wrapper.find('CircleBadgeIcon')).toHaveLength(1);
    });

    test('must be an instance of CircleBadgeImage', () => {
      wrapper = renderMount(circleBadgeSmallImage);
      expect(wrapper.find('CircleBadgeImage')).toHaveLength(1);
    });

    test('must be an instance of CircleBadgeDashedConnection', () => {
      wrapper = renderMount(circleBadgeDashedConnection);
      expect(wrapper.find('CircleBadgeDashedConnection')).toHaveLength(1);
    });
  });

  describe('Snaphot', () => {
    test('must match avatar', () => {
      expect(global.renderToJSON(avatar)).toMatchSnapshot();
    });

    test('must match avatarSmall', () => {
      expect(global.renderToJSON(avatarSmall)).toMatchSnapshot();
    });

    test('must match avatarParentChild', () => {
      expect(global.renderToJSON(avatarParentChild)).toMatchSnapshot();
    });

    test('must match avatarStackMore', () => {
      expect(global.renderToJSON(avatarStackMore)).toMatchSnapshot();
    });

    test('must match avatarStackThreePlus', () => {
      expect(global.renderToJSON(avatarStackThreePlus)).toMatchSnapshot();
    });

    test('must match avatarStackTwo', () => {
      expect(global.renderToJSON(avatarStackTwo)).toMatchSnapshot();
    });

    test('must match avatarStackRight', () => {
      expect(global.renderToJSON(avatarStackRight)).toMatchSnapshot();
    });

    test('must match circleBadgeSmallIcon', () => {
      expect(global.renderToJSON(circleBadgeSmallIcon)).toMatchSnapshot();
    });

    test('must match circleBadgeSmallImage', () => {
      expect(global.renderToJSON(circleBadgeSmallImage)).toMatchSnapshot();
    });

    test('must match circleBadgeMediumIcon', () => {
      expect(global.renderToJSON(circleBadgeMediumIcon)).toMatchSnapshot();
    });

    test('must match circleBadgeMediumImage', () => {
      expect(global.renderToJSON(circleBadgeMediumImage)).toMatchSnapshot();
    });

    test('must match circleBadgeLargeIcon', () => {
      expect(global.renderToJSON(circleBadgeLargeIcon)).toMatchSnapshot();
    });

    test('must match circleBadgeLargeImage', () => {
      expect(global.renderToJSON(circleBadgeLargeImage)).toMatchSnapshot();
    });

    test('must match circleBadgeDashedConnection', () => {
      expect(global.renderToJSON(circleBadgeDashedConnection)).toMatchSnapshot();
    });
  });
});
