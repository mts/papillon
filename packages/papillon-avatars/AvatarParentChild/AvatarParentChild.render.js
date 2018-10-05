import React from 'react';
import { action } from '@storybook/addon-actions';
import Avatar from '../Avatar';
import AvatarParentChild from './AvatarParentChild';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";
const srcCircleBadge = "https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png";

const avatarParentChild = (
  <AvatarParentChild className="float-left">
    <Avatar alt="parent" src={srcAvatar} width={48} height={48} />
    <Avatar className="avatar-child" alt="child" src={srcAvatar} width={20}
height={20} />
  </AvatarParentChild>
);

export {
  avatarParentChild,
};
