import React from 'react';
import Avatar from './Avatar';
import AvatarParentChild from './AvatarParentChild';
import { action } from '@storybook/addon-actions';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";

const avatar = (
  <Avatar alt="basic" src={srcAvatar} width={72} height={72} />
);

const avatarSmall = (
  <Avatar className="avatar-small" alt="small" src={srcAvatar} width={32} height={32} />
);

const avatarParentChild = (
  <AvatarParentChild className="float-left">
    <Avatar alt="parent" src={srcAvatar} width={48} height={48} />
    <Avatar className="avatar-child" alt="child" src={srcAvatar} width={20} height={20} />
  </AvatarParentChild>
);

export {
  avatar,
  avatarSmall,
  avatarParentChild
};
