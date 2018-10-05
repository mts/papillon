import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  flashMessages,
} from './FlashMessages.render';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Flash alerts', module)
  .add('Flash messages', withNotes('Must render FlashMessages ~ Flash messages')
      (withInfo('Flash messages')(() => flashMessages)))
;