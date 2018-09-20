import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import AvatarParentChild from './AvatarParentChild';
import CircleBadge from './CircleBadge';
import CircleBadgeIcon from './CircleBadgeIcon';
import CircleBadgeImage from './CircleBadgeImage';
import CircleBadgeDashedConnection from './CircleBadgeDashedConnection';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";
const srcCircleBadge = "https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png";

storiesOf('Avatar', module)
  .add('avatar', () => (
    <Avatar alt="basic" src={srcAvatar} width={72} height={72} />
  ))
  .add('avatar-small', () => (
    <Avatar className="avatar-small" alt="small" src={srcAvatar} width={32} height={32} />
  ))
  .add('avatar-parent-child', () => (
    <AvatarParentChild className="float-left">
      <Avatar alt="parent" src={srcAvatar} width={48} height={48} />
      <Avatar className="avatar-child" alt="child" src={srcAvatar} width={20} height={20} />
    </AvatarParentChild>
  ))
  .add('avatar-stack-more', () => (
    <div class="AvatarStack AvatarStack--three-plus">
      <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, octocat, octocat, and octocat">
        <Avatar className="avatar" height="20" alt="@octocat" src={srcAvatar} width="20" />
        <Avatar className="avatar" height="20" alt="@octocat" src={srcAvatar} width="20" />
        <div class="avatar avatar-more"></div>
        <Avatar className="avatar" height="20" alt="@octocat" src={srcAvatar} width="20" />
        <Avatar className="avatar" height="20" alt="@octocat" src={srcAvatar} width="20" />
        <Avatar className="avatar" height="20" alt="@octocat" src={srcAvatar} width="20" />
      </div>
    </div>
  ))
  .add('avatar-stack-three-plus', () => (
    <div class="AvatarStack AvatarStack--three-plus">
      <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, and octocat">
        <Avatar className="avatar" alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar className="avatar" alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar className="avatar" alt="@octocat" src={srcAvatar} width={20} height={20} />
      </div>
    </div>
  ))
  .add('avatar-stack-two', () => (
    <div class="AvatarStack AvatarStack--two">
      <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat and octocat">
        <a href="#" class="avatar">
          <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
        </a>
        <a href="#" class="avatar">
          <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
        </a>
      </div>
    </div>
  ))
  .add('avatar-stack-right', () => (
    <div class="AvatarStack AvatarStack--three-plus AvatarStack--right">
      <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1" aria-label="octocat, octocat, and octocat">
        <Avatar className="avatar" alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar className="avatar" alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar className="avatar" alt="@octocat" src={srcAvatar} width={20} height={20} />
      </div>
    </div>
  ))
  .add('CircleBadge-small-icon', () => (
    <CircleBadge size="small" className="bg-yellow" title="Zap this!" href="#small">
      <CircleBadgeIcon className="text-white" icon="zap" />
    </CircleBadge>
  ))
  .add('CircleBadge-small-image', () => (
    <CircleBadge size="small" className="float-left mr-2" title="Travis CI" href="#small">
      <CircleBadgeImage src={srcCircleBadge} alt="" />
    </CircleBadge>
  ))
  .add('CircleBadge-medium-icon', () => (
    <CircleBadge size="medium" className="bg-gray-dark" title="Zap this!" href="#medium">
      <CircleBadgeIcon className="text-white" icon="zap" />
    </CircleBadge>
  ))
  .add('CircleBadge-medium-image', () => (
    <CircleBadge size="medium" className="float-left mr-2" title="Travis CI" href="#medium">
      <CircleBadgeImage src={srcCircleBadge} alt="" />
    </CircleBadge>
  ))
  .add('CircleBadge-large-icon', () => (
    <CircleBadge size="large" className="bg-gray-dark" title="Zap this!" href="#large">
      <CircleBadgeIcon className="text-white" icon="zap" />
    </CircleBadge>
  ))
  .add('CircleBadge-large-image', () => (
    <CircleBadge size="large" className="float-left mr-2" title="Travis CI" href="#large">
      <CircleBadgeImage src={srcCircleBadge} alt="" />
    </CircleBadge>
  ))
  .add('DashedConnection', () => (
    <CircleBadgeDashedConnection>
      <CircleBadgeImage src={srcCircleBadge} alt="" />
      <CircleBadgeImage src={srcCircleBadge} alt="" />
      <CircleBadgeImage src={srcCircleBadge} alt="" />
    </CircleBadgeDashedConnection>
  ))
;
