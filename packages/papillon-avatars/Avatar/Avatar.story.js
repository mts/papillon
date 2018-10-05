import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import {
  avatar,
  avatarSmall,
  avatarStackMore,
  avatarStackThreePlus,
  avatarStackTwo,
  avatarStackRight,
} from './Avatar.render';

storiesOf('Avatar/Avatar', module)
  .add('avatar', withNotes('Must render Avatar ~ avatar')
      (withInfo('avatar')(() => avatar)))
  .add('avatar-small', withNotes('Must render Avatar ~ avatar-small')
      (withInfo('avatar-small')(() => avatarSmall)))
  .add('avatar-stack-more', withNotes('Must render Avatar ~ avatar-stack-more')
      (withInfo('avatar-stack-more')(() => avatarStackMore)))
  .add('avatar-stack-three-plus', withNotes('Must render Avatar ~ avatar-stack-three-plus')
      (withInfo('avatar-stack-three-plus')(() => avatarStackThreePlus)))
  .add('avatar-stack-two', withNotes('Must render Avatar ~ avatar-stack-two')
      (withInfo('avatar-stack-two')(() => avatarStackTwo)))
  .add('avatar-stack-right', withNotes('Must render Avatar ~ avatar-stack-right')
      (withInfo('avatar-stack-right')(() => avatarStackRight)))
;
