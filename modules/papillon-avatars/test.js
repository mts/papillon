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

    test('must match avatar-small', () => {
      expect(global.renderToJSON(avatarSmall)).toMatchSnapshot();
    });

    test('must match avatar-parent-child', () => {
      expect(global.renderToJSON(avatarParentChild)).toMatchSnapshot();
    });

    test('must match avatar-stack-more', () => {
      expect(global.renderToJSON(avatarStackMore)).toMatchSnapshot();
    });

    test('must match avatar-stack-three-plus', () => {
      expect(global.renderToJSON(avatarStackThreePlus)).toMatchSnapshot();
    });

    test('must match avatar-stack-two', () => {
      expect(global.renderToJSON(avatarStackTwo)).toMatchSnapshot();
    });

    test('must match avatar-stack-right', () => {
      expect(global.renderToJSON(avatarStackRight)).toMatchSnapshot();
    });

    test('must match CircleBadge-small-icon', () => {
      expect(global.renderToJSON(circleBadgeSmallIcon)).toMatchSnapshot();
    });

    test('must match CircleBadge-small-image', () => {
      expect(global.renderToJSON(circleBadgeSmallImage)).toMatchSnapshot();
    });

    test('must match CircleBadge-medium-icon', () => {
      expect(global.renderToJSON(circleBadgeMediumIcon)).toMatchSnapshot();
    });

    test('must match CircleBadge-medium-image', () => {
      expect(global.renderToJSON(circleBadgeMediumImage)).toMatchSnapshot();
    });

    test('must match CircleBadge-large-icon', () => {
      expect(global.renderToJSON(circleBadgeLargeIcon)).toMatchSnapshot();
    });

    test('must match CircleBadge-large-image', () => {
      expect(global.renderToJSON(circleBadgeLargeImage)).toMatchSnapshot();
    });

    test('must match CircleBadgeDashedConnection', () => {
      expect(global.renderToJSON(circleBadgeDashedConnection)).toMatchSnapshot();
    });
  });
});
