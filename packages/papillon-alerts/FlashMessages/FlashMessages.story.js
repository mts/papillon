import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import {
  flashMessages,
} from './FlashMessages.render';

storiesOf('Flash alerts/FlashMessages', module)
  .add('Flash messages', withNotes('Must render FlashMessages ~ Flash messages')
      (withInfo('Flash messages')(() => flashMessages)))
;
