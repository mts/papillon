import React from 'react';
import Avatar from './Avatar';
import AvatarParentChild from './AvatarParentChild';
import CircleBadge from './CircleBadge';
import CircleBadgeIcon from './CircleBadgeIcon';
import CircleBadgeImage from './CircleBadgeImage';
import { action } from '@storybook/addon-actions';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";
const srcCircleBadge = "https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png";

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

const avatarStackMore = (
  <div className="AvatarStack AvatarStack--three-plus">
    <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, octocat, octocat, and octocat">
      <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
      <Avatar height={20} alt="@octocat" src={srcAvatar} width={20} />
      <div className="avatar avatar-more"></div>
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

const circleBadgeSmallIcon = (
  <CircleBadge size="small" className="bg-yellow" title="Zap this!" href="#small">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
);

const circleBadgeSmallImage = (
  <CircleBadge size="small" className="float-left mr-2" title="Travis CI" href="#small">
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadge>
);

const circleBadgeMediumIcon = (
  <CircleBadge size="medium" className="bg-gray-dark" title="Zap this!" href="#medium">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
);

const circleBadgeMediumImage = (
  <CircleBadge size="medium" className="float-left mr-2" title="Travis CI" href="#medium">
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadge>
);

const circleBadgeLargeIcon = (
  <CircleBadge size="large" className="bg-gray-dark" title="Zap this!" href="#large">
    <CircleBadgeIcon className="text-white" icon="zap" />
  </CircleBadge>
);

const circleBadgeLargeImage = (
  <CircleBadge size="large" className="float-left mr-2" title="Travis CI" href="#large">
    <CircleBadgeImage src={srcCircleBadge} alt="" />
  </CircleBadge>
);

export {
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
  circleBadgeLargeImage
};
