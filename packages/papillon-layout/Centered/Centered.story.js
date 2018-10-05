import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import {
  centered,
} from './Centered.render';

storiesOf('Layout/Centered', module)
  .add('Centered', withNotes('Must render Layout ~ Centered')
      (withInfo('Centered')(() => centered)))
;
