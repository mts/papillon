import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  menu,
  menuWithIconAvatarCounter,
  menuWithHeading
} from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

import Menu from './Menu';

storiesOf('Navigation', module)
  .add('Menu', withNotes('Must render Menu ~ Menu')
      (withInfo('Menu')(() => menu)))
  .add('Menu with octicons, avatars and counters', withNotes('Must render Menu ~ Menu with octicons, avatars and counters')
      (withInfo('Menu with octicons, avatars and counters')(() => menuWithIconAvatarCounter)))
  .add('Menu with heading', withNotes('Must render Menu ~ Menu with heading')
      (withInfo('Menu with heading')(() => menuWithHeading)))
;
