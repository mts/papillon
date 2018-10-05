import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import {
  circleBadgeSmallImage,
  circleBadgeMediumImage,
  circleBadgeLargeImage,
} from './CircleBadgeImage.render';

storiesOf('Avatar/CircleBadgeImage', module)
  .add('CircleBadge-small-image', withNotes('Must render CircleBadge ~ CircleBadge-small-image')
      (withInfo('CircleBadge-small-image')(() => circleBadgeSmallImage)))
  .add('CircleBadge-medium-image', withNotes('Must render CircleBadge ~ CircleBadge-medium-image')
      (withInfo('CircleBaMediumIedium-image')(() => circleBadgeMediumImage)))
  .add('CircleBadge-large-image', withNotes('Must render CircleBadge ~ CircleBadge-large-image')
      (withInfo('CircleBadge-large-image')(() => circleBadgeLargeImage)))
;
