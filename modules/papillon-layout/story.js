import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  container,
  centered,
  grid
} from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Layout', module)
  .add('Container', withNotes('Must render Layout ~ Container')
      (withInfo('Container')(() => container)))
  .add('Centered', withNotes('Must render Layout ~ Centered')
      (withInfo('Centered')(() => centered)))
  .add('Grid', withNotes('Must render Layout ~ Grid')
      (withInfo('Grid')(() => grid)))
;
