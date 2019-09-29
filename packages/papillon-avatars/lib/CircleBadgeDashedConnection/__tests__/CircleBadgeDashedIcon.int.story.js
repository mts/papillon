import { storiesOf } from '@storybook/react'
import { circleBadgeDashedConnection } from './CircleBadgeDashedIcon.int.render'
import { getInfo } from '../../../../../.storybook/library'

const circleBadgeDashedConnectionInfo = getInfo('Flash messages')

storiesOf('Avatars/CircleBadgeDashedIcon', module).add(
  circleBadgeDashedConnectionInfo.text,
  () => circleBadgeDashedConnection,
  circleBadgeDashedConnectionInfo.parameters,
)
