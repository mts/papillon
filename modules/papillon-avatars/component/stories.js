import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import AvatarParentChild from './AvatarParentChild';
import CircleBadge from './CircleBadge';
import CircleBadgeIcon from './CircleBadgeIcon';
import CircleBadgeImage from './CircleBadgeImage';
import CircleBadgeDashedConnection from './CircleBadgeDashedConnection';
import {
  avatar,
  avatarSmall,
  avatarParentChild
} from './flavors';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";
const srcCircleBadge = "https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png";

storiesOf('Avatar', module)
  .add('avatar', withNotes('Must render Avatar ~ avatar')
      (withInfo('avatar')(() => avatar)))
  .add('avatar-small', withNotes('Must render Avatar ~ avatar-small')
      (withInfo('avatar-small')(() => avatarSmall)))
  .add('avatar-parent-child', withNotes('Must render Avatar ~ avatar-parent-child')
      (withInfo('avatar-parent-child')(() => avatarParentChild)))
  .add('avatar-stack-more', () => (
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
  ))
  .add('avatar-stack-three-plus', () => (
    <div className="AvatarStack AvatarStack--three-plus">
      <div className="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, and octocat">
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
      </div>
    </div>
  ))
  .add('avatar-stack-two', () => (
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
  ))
  .add('avatar-stack-right', () => (
    <div className="AvatarStack AvatarStack--three-plus AvatarStack--right">
      <div className="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1" aria-label="octocat, octocat, and octocat">
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
        <Avatar alt="@octocat" src={srcAvatar} width={20} height={20} />
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
