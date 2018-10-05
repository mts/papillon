import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  flashAlertDefault,
  multipleParagraphs,
  flashWarn,
  flashError,
  flashSuccess,
  flashIcon,
  withDismiss,
  withActionButton,
  fullWidthFlash
} from './FlashAlert.render';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Flash alerts/FlashAlert', module)
  .add('Default', withNotes('Must render FlashAlert ~ Default')
      (withInfo('Default')(() => flashAlertDefault)))
  .add('Multiple paragraphs', withNotes('Must render FlashAlert ~ Multiple paragraphs')
      (withInfo('Multiple paragraphs')(() => multipleParagraphs)))
  .add('flash-warn', withNotes('Must render FlashAlert ~ flash-warn')
    (withInfo('flash-warn')(() => flashWarn)))
  .add('flash-error', withNotes('Must render FlashAlert ~ flash-error')
    (withInfo('flash-error')(() => flashError)))
  .add('flash-success', withNotes('Must render FlashAlert ~ flash-success')
    (withInfo('flash-success')(() => flashSuccess)))
  .add('flash-icon', withNotes('Must render FlashAlert ~ flash-icon')
    (withInfo('flash-icon')(() => flashIcon)))
  .add('with-dismiss', withNotes('Must render FlashAlert ~ flash-dismiss')
    (withInfo('with-dismiss')(() => withDismiss)))
  .add('with-action-button', withNotes('Must render FlashAlert ~ with-action-button')
    (withInfo('with-action-button')(() => withActionButton)))
  .add('full-width-flash', withNotes('Must render FlashAlert ~ full-width-flash')
    (withInfo('full-width-flash')(() => fullWidthFlash)))
;
