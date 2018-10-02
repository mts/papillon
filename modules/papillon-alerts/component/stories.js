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
import { withInfo } from '@storybook/addon-info';

storiesOf('Flash alerts', module)
  .add('Default', withInfo('Default')(() => flashAlertDefault))
  .add('Multiple paragraphs', withInfo('Multiple paragraphs')(() => multipleParagraphs))
  .add('Flash messages', withInfo('Flash messages')(() => flashMessages))
  .add('flash-warn', withInfo('flash-warn')(() => flashWarn))
  .add('flash-error', withInfo('flash-error')(() => flashError))
  .add('flash-success', withInfo('flash-success')(() => flashSuccess))
  .add('flash-icon', withInfo('flash-icon')(() => flashIcon))
  .add('with-dismiss', withInfo('with-dismiss')(() => withDismiss))
  .add('with-action-button', withInfo('with-action-button')(() => withActionButton))
  .add('full-width-flash', withInfo('full-width-flash')(() => fullWidthFlash))
;
