import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  container,
  centered,
} from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Layout', module)
  .add('Container', withNotes('Must render Layout ~ Container')
      (withInfo('Container')(() => container)))
  .add('Centered', withNotes('Must render Layout ~ Centered')
      (withInfo('Centered')(() => centered)))
;
