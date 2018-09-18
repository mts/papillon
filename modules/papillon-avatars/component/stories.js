import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';
import CircleBadgeIcon from './CircleBadgeIcon';
import CircleBadgeImage from './CircleBadgeImage';

const srcBasic = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";

storiesOf('Avatar', module)
  .add('avatar', () => (
    <Avatar className="avatar" alt="basic" src={srcBasic} width={72} height={72} />
  ))
  .add('avatar-small', () => (
    <Avatar className="avatar avatar-small" alt="small" src={srcBasic} width={32} height={32} />
  ))
  .add('avatar-parent-child', () => (
    <div class="avatar-parent-child float-left">
      <Avatar className="avatar" alt="parent" src={srcBasic} width={48} height={48} />
      <Avatar className="avatar avatar-child" alt="child" src={srcBasic} width={20} height={20} />
    </div>
  ))
  .add('avatar-stack-more', () => (
    <div class="AvatarStack AvatarStack--three-plus">
      <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, octocat, octocat, and octocat">
        <Avatar className="avatar" height="20" alt="@octocat" src={srcBasic} width="20" />
        <Avatar className="avatar" height="20" alt="@octocat" src={srcBasic} width="20" />
        <div class="avatar avatar-more"></div>
        <Avatar className="avatar" height="20" alt="@octocat" src={srcBasic} width="20" />
        <Avatar className="avatar" height="20" alt="@octocat" src={srcBasic} width="20" />
        <Avatar className="avatar" height="20" alt="@octocat" src={srcBasic} width="20" />
      </div>
    </div>
  ))
  .add('avatar-stack-three-plus', () => (
    <div class="AvatarStack AvatarStack--three-plus">
      <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat, octocat, and octocat">
        <Avatar className="avatar" alt="@octocat" src={srcBasic} width={20} height={20} />
        <Avatar className="avatar" alt="@octocat" src={srcBasic} width={20} height={20} />
        <Avatar className="avatar" alt="@octocat" src={srcBasic} width={20} height={20} />
      </div>
    </div>
  ))
  .add('avatar-stack-two', () => (
    <div class="AvatarStack AvatarStack--two">
      <div class="AvatarStack-body tooltipped tooltipped-se tooltipped-align-left-1" aria-label="octocat and octocat">
        <a href="#" class="avatar">
          <Avatar alt="@octocat" src={srcBasic} width={20} height={20} />
        </a>
        <a href="#" class="avatar">
          <Avatar alt="@octocat" src={srcBasic} width={20} height={20} />
        </a>
      </div>
    </div>
  ))
  .add('avatar-stack-right', () => (
    <div class="AvatarStack AvatarStack--three-plus AvatarStack--right">
      <div class="AvatarStack-body tooltipped tooltipped-sw tooltipped-align-right-1" aria-label="octocat, octocat, and octocat">
        <Avatar className="avatar" alt="@octocat" src={srcBasic} width={20} height={20} />
        <Avatar className="avatar" alt="@octocat" src={srcBasic} width={20} height={20} />
        <Avatar className="avatar" alt="@octocat" src={srcBasic} width={20} height={20} />
      </div>
    </div>
  ))
  .add('CircleBadge-small-icon', () => (
    <a class="CircleBadge CircleBadge--small bg-yellow" title="Zap this!" href="#small">
      <CircleBadgeIcon className="CircleBadge-icon text-white" icon="zap" />
    </a>
  ))
  .add('CircleBadge-small-image', () => (
    <a class="CircleBadge CircleBadge--small float-left mr-2" title="Travis CI" href="#small">
      <CircleBadgeImage
        src="https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png"
        className="CircleBadge-icon"
        alt=""
      />
    </a>
  ))
  .add('CircleBadge-medium-icon', () => (
    <a class="CircleBadge CircleBadge--medium bg-gray-dark" title="Zap this!" href="#medium">
      <CircleBadgeIcon className="CircleBadge-icon text-white" icon="zap" />
    </a>
  ))
  .add('CircleBadge-medium-image', () => (
    <a class="CircleBadge CircleBadge--medium float-left mr-2" title="Travis CI" href="#medium">
      <CircleBadgeImage
        src="https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png"
        className="CircleBadge-icon"
        alt=""
      />
    </a>
  ))
  .add('CircleBadge-large-icon', () => (
    <a class="CircleBadge CircleBadge--large bg-gray-dark" title="Zap this!" href="#large">
      <CircleBadgeIcon className="CircleBadge-icon text-white" icon="zap" />
    </a>
  ))
  .add('CircleBadge-large-image', () => (
    <a class="CircleBadge CircleBadge--large float-left mr-2" title="Travis CI" href="#large">
      <CircleBadgeImage
        src="https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png"
        className="CircleBadge-icon"
        alt=""
      />
    </a>
  ))
  .add('DashedConnection', () => (
    <div class="DashedConnection">
      <ul class="d-flex list-style-none flex-justify-between" aria-label="A sample GitHub workflow">
        <li class="CircleBadge CircleBadge--small" aria-label="GitHub">
          <CircleBadgeImage
            src="https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png"
            className="CircleBadge-icon"
            alt=""
          />
        </li>

        <li class="CircleBadge CircleBadge--small" aria-label="Slack">
          <CircleBadgeImage
            src="https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png"
            className="CircleBadge-icon"
            alt=""
          />
        </li>

        <li class="CircleBadge CircleBadge--small" aria-label="Travis CI">
            <CircleBadgeImage
              src="https://user-images.githubusercontent.com/334891/30004619-adc8ca86-90a0-11e7-8ccc-2322261d2ab1.png"
              className="CircleBadge-icon"
              alt=""
            />
        </li>
      </ul>
    </div>
  ))
;
