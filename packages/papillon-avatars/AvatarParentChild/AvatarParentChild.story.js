import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import {
  avatarParentChild,
} from './AvatarParentChild.render';

storiesOf('Avatar/AvatarParentChild', module)
  .add('avatar-parent-child', withNotes('Must render Avatar ~ avatar-parent-child')
      (withInfo('avatar-parent-child')(() => avatarParentChild)))
;
