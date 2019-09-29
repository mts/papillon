import { storiesOf } from '@storybook/react'
import { circleBadgeSmallImage, circleBadgeMediumImage, circleBadgeLargeImage } from './CircleBadgeImage.int.render'
import { getInfo } from '../../../../../.storybook/library'

const circleBadgeSmallImageInfo = getInfo('CircleBadge-small-Image')
const circleBadgeMediumImageInfo = getInfo('CircleBadge-medium-Image')
const circleBadgeLargeImageInfo = getInfo('CircleBadge-large-Image')

storiesOf('Avatars/CircleBadgeImage', module)
  .add(circleBadgeSmallImageInfo.text, () => circleBadgeSmallImage, circleBadgeSmallImageInfo.parameters)
  .add(circleBadgeMediumImageInfo.text, () => circleBadgeMediumImage, circleBadgeMediumImageInfo.parameters)
  .add(circleBadgeLargeImageInfo.text, () => circleBadgeLargeImage, circleBadgeLargeImageInfo.parameters)
