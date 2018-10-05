import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  grid
} from './Grid.render';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Layout/Grid', module)
  .add('Grid', withNotes('Must render Layout ~ Grid')
      (withInfo('Grid')(() => grid)))
;
