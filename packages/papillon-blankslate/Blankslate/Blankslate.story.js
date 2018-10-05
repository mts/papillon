import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import {
  blankslate,
  blankslateIcon,
  blankslateNarrow,
  blankslateCapped,
  blankslateLarge,
  blankslateCleanBackground,
} from './Blankslate.render';

storiesOf('Blankslate/Blankslate', module)
  .add('blankslate', withNotes('Must render Blankslate ~ blankslate')
      (withInfo('blankslate')(() => blankslate)))
  .add('blankslate-icon', withNotes('Must render Blankslate ~ blankslate-icon')
      (withInfo('blankslate-icon')(() => blankslateIcon)))
  .add('blankslate-narrow', withNotes('Must render Blankslate ~ blankslate-narrow')
      (withInfo('blankslate-narrow')(() => blankslateNarrow)))
  .add('blankslate-capped', withNotes('Must render Blankslate ~ blankslate-capped')
      (withInfo('blankslate-capped')(() => blankslateCapped)))
  .add('blankslate-large', withNotes('Must render Blankslate ~ blankslate-large')
      (withInfo('blankslate-large')(() => blankslateLarge)))
  .add('blankslate-clean-background', withNotes('Must render Blankslate ~ blankslate-clean-background')
      (withInfo('blankslate-clean-background')(() => blankslateCleanBackground)))
;
