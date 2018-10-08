import React from 'react';
import Avatar from '../Avatar';

const AvatarParentChild = process.env.NODE_ENV === 'develop'
  ? require('./AvatarParentChild').default
  : require('../lib/papillon-avatars').AvatarParentChildvatar;

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";

const avatarParentChild = (
  <AvatarParentChild className="float-left">
    <Avatar alt="parent" src={srcAvatar} width={48} height={48} />
    <Avatar className="avatar-child" alt="child" src={srcAvatar} width={20}
height={20} />
  </AvatarParentChild>
);

export default avatarParentChild;
