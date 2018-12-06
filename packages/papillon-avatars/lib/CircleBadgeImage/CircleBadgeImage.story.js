import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import {
  circleBadgeSmallImage,
  circleBadgeMediumImage,
  circleBadgeLargeImage,
} from './CircleBadgeImage.render'
import { getInfo } from '../../../../.storybook/utility'

const circleBadgeSmallImageInfo = getInfo('CircleBadge-small-Image')
const circleBadgeMediumImageInfo = getInfo('CircleBadge-medium-Image')
const circleBadgeLargeImageInfo = getInfo('CircleBadge-large-Image')

storiesOf('Avatars/CircleBadgeImage', module)
  .add(circleBadgeSmallImageInfo.text, () => circleBadgeSmallImage, circleBadgeSmallImageInfo.parameters)
  .add(circleBadgeMediumImageInfo.text, () => circleBadgeMediumImage, circleBadgeMediumImageInfo.parameters)
  .add(circleBadgeLargeImageInfo.text, () => circleBadgeLargeImage, circleBadgeLargeImageInfo.parameters)
