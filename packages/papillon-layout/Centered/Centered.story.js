import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  centered,
} from './Centered.render';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Layout/Centered', module)
  .add('Centered', withNotes('Must render Layout ~ Centered')
      (withInfo('Centered')(() => centered)))
;
