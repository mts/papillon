import React from 'react';
import { storiesOf } from '@storybook/react';
import Blankslate from './Blankslate';
import Octicon, {getIconByName} from '@githubprimer/octicons-react';
import {
  blankslate,
  blankslateIcon,
  blankslateNarrow,
  blankslateCapped,
} from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Blankslate', module)
  .add('blankslate', withNotes('Must render FlashAlert ~ blankslate')
      (withInfo('blankslate')(() => blankslate)))
  .add('blankslate-icon', withNotes('Must render FlashAlert ~ blankslate-icon')
      (withInfo('blankslate-icon')(() => blankslateIcon)))
  .add('blankslate-narrow', withNotes('Must render FlashAlert ~ blankslate-narrow')
      (withInfo('blankslate-narrow')(() => blankslateNarrow)))
  .add('blankslate-capped', withNotes('Must render FlashAlert ~ blankslate-capped')
      (withInfo('blankslate-capped')(() => blankslateCapped)))
   .add('blankslate-large', () => (
    <Blankslate className="blankslate-large">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </Blankslate>
  ))
   .add('blankslate-clean-background', () => (
    <Blankslate className="blankslate-clean-background">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </Blankslate>
  ))
;
