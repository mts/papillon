import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  container,
} from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Layout', module)
  .add('Container', withNotes('Must render Container ~ Container')
      (withInfo('Container')(() => container)))
;
