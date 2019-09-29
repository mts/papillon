import { storiesOf } from '@storybook/react'
import { circleBadgeSmallIcon, circleBadgeMediumIcon, circleBadgeLargeIcon } from './CircleBadgeIcon.render'
import { getInfo } from '../../../../.storybook/library'

const circleBadgeSmallIconInfo = getInfo('CircleBadge-small-icon')
const circleBadgeMediumIconInfo = getInfo('CircleBadge-medium-icon')
const circleBadgeLargeIconInfo = getInfo('CircleBadge-large-icon')

storiesOf('Avatars/CircleBadgeIcon', module)
  .add(circleBadgeSmallIconInfo.text, () => circleBadgeSmallIcon, circleBadgeSmallIconInfo.parameters)
  .add(circleBadgeMediumIconInfo.text, () => circleBadgeMediumIcon, circleBadgeMediumIconInfo.parameters)
  .add(circleBadgeLargeIconInfo.text, () => circleBadgeLargeIcon, circleBadgeLargeIconInfo.parameters)
