import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  circleBadgeDashedConnection
} from './CircleBadgeDashedIcon.render';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Avatar/CircleBadgeDashedIcon', module)
  .add('DashedConnection', withNotes('Must render CircleBadge ~ DashedConnection')
      (withInfo('DashedConnection')(() => circleBadgeDashedConnection)))
;
