import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  container,
} from './Container.render';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Layout/Container', module)
  .add('Container', withNotes('Must render Layout ~ Container')
      (withInfo('Container')(() => container)))
;
