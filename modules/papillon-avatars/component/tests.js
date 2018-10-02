import React from 'react';
import {
  avatar,
  avatarSmall,
  avatarParentChild,
  avatarStackMore,
  avatarStackThreePlus
} from './flavors';

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
  });
});
