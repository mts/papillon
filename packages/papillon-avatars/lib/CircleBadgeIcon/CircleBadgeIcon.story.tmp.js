import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import {
  circleBadgeSmallIcon,
  circleBadgeMediumIcon,
  circleBadgeLargeIcon,
} from './CircleBadgeIcon.render'
import { getInfo } from '../../../../.storybook/utility'

const circleBadgeSmallIconInfo = getInfo('CircleBadge-small-icon')
const circleBadgeMediumIconInfo = getInfo('CircleBadge-medium-icon')
const circleBadgeLargeIconInfo = getInfo('CircleBadge-large-icon')

storiesOf('Avatar/CircleBadgeIcon', module)
  .add(circleBadgeSmallIconInfo.text, () => circleBadgeSmallIcon, circleBadgeSmallIconInfo.parameters)
  .add(circleBadgeMediumIconInfo.text, () => circleBadgeMediumIcon, circleBadgeMediumIconInfo.parameters)
  .add(circleBadgeLargeIconInfo.text, () => circleBadgeLargeIcon, circleBadgeLargeIconInfo.parameters)
