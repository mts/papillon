import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import {
  container,
} from './Container.render';

storiesOf('Layout/Container', module)
  .add('Container', withNotes('Must render Layout ~ Container')
      (withInfo('Container')(() => container)))
;
