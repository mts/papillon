import React from 'react';
import { storiesOf } from '@storybook/react';
import FlashAlert from './FlashAlert';
import FlashMessages from './FlashMessages';

import {
  flashAlertDefault,
  multipleParagraphs,
  flashMessages,
  flashWarn,
  flashError,
  flashSuccess,
  flashIcon,
  withDismiss,
  withActionButton,
  fullWidthFlash
} from './flavors';

storiesOf('Flash alerts', module)
  .add('Default', () => flashAlertDefault)
  .add('Multiple paragraphs', () => multipleParagraphs)
  .add('Flash messages', () => flashMessages)
  .add('flash-warn', () => flashWarn)
  .add('flash-error', () => flashError)
  .add('flash-success', () => flashSuccess)
  .add('flash-icon', () => flashIcon)
  .add('with-dismiss', () => withDismiss)
  .add('with-action-button', () => withActionButton)
  .add('full-width-flash', () => fullWidthFlash)
;
