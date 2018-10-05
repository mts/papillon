import React from 'react';
import { action } from '@storybook/addon-actions';
import Avatar from './Avatar';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";
const srcCircleBadge = "https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png";

const avatar = (
  <Avatar alt="basic" src={srcAvatar} width={72} height={72} />
);

const avatarSmall = (
  <Avatar className="avatar-small" alt="small" src={srcAvatar} width={32}
height={32} />
);

const avatarStackMore = (
  <div className="AvatarStack AvatarStack--three-plus">
    <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, octocat, octocat, and octocat">
      <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
      <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
      <div className="avatar avatar-more" />
      <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
      <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
      <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
    </div>
  </div>
);

const avatarStackThreePlus = (
    <div className="AvatarStack AvatarStack--three-plus">
      <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, and octocat">
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      </div>
    </div>
);

const avatarStackTwo = (
  <div className="AvatarStack AvatarStack--two">
    <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat and octocat">
      <a href="#" className="avatar">
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      </a>
      <a href="#" className="avatar">
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      </a>
    </div>
  </div>
);

const avatarStackRight = (
  <div className="AvatarStack AvatarStack--three-plus AvatarStack--right">
    <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1" aria-label="octocat, octocat, and octocat">
      <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
    </div>
  </div>
);

export {
  avatar,
  avatarSmall,
  avatarStackMore,
  avatarStackThreePlus,
  avatarStackTwo,
  avatarStackRight,
};
