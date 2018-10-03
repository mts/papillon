import React from 'react';
import { storiesOf } from '@storybook/react';
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
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Avatar', module)
  .add('avatar', withNotes('Must render Avatar ~ avatar')
      (withInfo('avatar')(() => avatar)))
  .add('avatar-small', withNotes('Must render Avatar ~ avatar-small')
      (withInfo('avatar-small')(() => avatarSmall)))
  .add('avatar-parent-child', withNotes('Must render Avatar ~ avatar-parent-child')
      (withInfo('avatar-parent-child')(() => avatarParentChild)))
  .add('avatar-stack-more', withNotes('Must render Avatar ~ avatar-stack-more')
      (withInfo('avatar-stack-more')(() => avatarStackMore)))
  .add('avatar-stack-three-plus', withNotes('Must render Avatar ~ avatar-stack-three-plus')
      (withInfo('avatar-stack-three-plus')(() => avatarStackThreePlus)))
  .add('avatar-stack-two', withNotes('Must render Avatar ~ avatar-stack-two')
      (withInfo('avatar-stack-two')(() => avatarStackTwo)))
  .add('avatar-stack-right', withNotes('Must render Avatar ~ avatar-stack-right')
      (withInfo('avatar-stack-right')(() => avatarStackRight)))
  .add('CircleBadge-small-icon', withNotes('Must render CircleBadge ~ CircleBadge-small-icon')
      (withInfo('CircleBadge-small-icon')(() => circleBadgeSmallIcon)))
  .add('CircleBadge-small-image', withNotes('Must render CircleBadge ~ CircleBadge-small-image')
      (withInfo('CircleBadge-small-image')(() => circleBadgeSmallImage)))
  .add('CircleBadge-medium-icon', withNotes('Must render CircleBadge ~ CircleBadge-medium-icon')
      (withInfo('CircleBadge-medium-icon')(() => circleBadgeMediumIcon)))
  .add('CircleBadge-medium-image', withNotes('Must render CircleBadge ~ CircleBadge-medium-image')
      (withInfo('CircleBaMediumIedium-image')(() => circleBadgeMediumImage)))
  .add('CircleBadge-large-icon', withNotes('Must render CircleBadge ~ CircleBadge-large-icon')
      (withInfo('CircleBadge-large-icon')(() => circleBadgeLargeIcon)))
  .add('CircleBadge-large-image', withNotes('Must render CircleBadge ~ CircleBadge-large-image')
      (withInfo('CircleBadge-large-image')(() => circleBadgeLargeImage)))
  .add('DashedConnection', withNotes('Must render CircleBadge ~ DashedConnection')
      (withInfo('DashedConnection')(() => circleBadgeDashedConnection)))
;
