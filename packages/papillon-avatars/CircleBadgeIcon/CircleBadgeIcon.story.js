import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import {
  circleBadgeSmallIcon,
  circleBadgeMediumIcon,
  circleBadgeLargeIcon,
} from './CircleBadgeIcon.render'

storiesOf('Avatar/CircleBadgeIcon', module)
  .add('CircleBadge-small-icon', withNotes('Must render CircleBadge ~ CircleBadge-small-icon')
      (withInfo('CircleBadge-small-icon')(() => circleBadgeSmallIcon)))
  .add('CircleBadge-medium-icon', withNotes('Must render CircleBadge ~ CircleBadge-medium-icon')
      (withInfo('CircleBadge-medium-icon')(() => circleBadgeMediumIcon)))
  .add('CircleBadge-large-icon', withNotes('Must render CircleBadge ~ CircleBadge-large-icon')
      (withInfo('CircleBadge-large-icon')(() => circleBadgeLargeIcon)))

