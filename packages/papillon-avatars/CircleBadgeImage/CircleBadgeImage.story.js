import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  circleBadgeSmallImage,
  circleBadgeMediumImage,
  circleBadgeLargeImage,
} from './CircleBadgeImage.render';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

storiesOf('Avatar/CircleBadgeImage', module)
  .add('CircleBadge-small-image', withNotes('Must render CircleBadge ~ CircleBadge-small-image')
      (withInfo('CircleBadge-small-image')(() => circleBadgeSmallImage)))
  .add('CircleBadge-medium-image', withNotes('Must render CircleBadge ~ CircleBadge-medium-image')
      (withInfo('CircleBaMediumIedium-image')(() => circleBadgeMediumImage)))
  .add('CircleBadge-large-image', withNotes('Must render CircleBadge ~ CircleBadge-large-image')
      (withInfo('CircleBadge-large-image')(() => circleBadgeLargeImage)))
;
