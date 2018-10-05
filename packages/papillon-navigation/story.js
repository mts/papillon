import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  menu,
  menuWithIconAvatarCounter,
  menuWithHeading
} from './flavorMenu';
import {
  underlineNav,
  underlineNavActions,
  underlineNavRight,
  underlineNavRightWithActions,
  underlineNavWithCounter
} from './flavorUnderlineNav';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Navigation', module)
  .add('Menu', withNotes('Must render Menu ~ Menu')
      (withInfo('Menu')(() => menu)))
  .add('Menu with octicons, avatars and counters', withNotes('Must render Menu ~ Menu with octicons, avatars and counters')
      (withInfo('Menu with octicons, avatars and counters')(() => menuWithIconAvatarCounter)))
  .add('Menu with heading', withNotes('Must render Menu ~ Menu with heading')
      (withInfo('Menu with heading')(() => menuWithHeading)))
  .add('UnderlineNav', withNotes('Must render UnderlineNav ~ UnderlineNav')
      (withInfo('UnderlineNav')(() => underlineNav)))
  .add('UnderlineNav-actions', withNotes('Must render UnderlineNav ~ UnderlineNav-actions')
      (withInfo('UnderlineNav-actions')(() => underlineNavActions)))
  .add('UnderlineNav--right', withNotes('Must render UnderlineNav ~ UnderlineNav--right')
      (withInfo('UnderlineNav--right')(() => underlineNavRight)))
  .add('UnderlineNav--right with actions', withNotes('Must render UnderlineNav ~ UnderlineNav--right with actions')
      (withInfo('UnderlineNav--right with actions')(() => underlineNavRightWithActions)))
  .add('UnderlineNav with Counter', withNotes('Must render UnderlineNav ~ UnderlineNav with Counter')
      (withInfo('UnderlineNav with Counter')(() => underlineNavWithCounter)))
;
