import { storiesOf } from '@storybook/react'
import circleBadgeDashedConnection from './CircleBadgeDashedIcon.render'
import { getInfo } from '../../../../.storybook/utility'

const circleBadgeDashedConnectionInfo = getInfo('Flash messages')

storiesOf('Avatars/CircleBadgeDashedIcon', module).add(
  circleBadgeDashedConnectionInfo.text,
  () => circleBadgeDashedConnection,
  circleBadgeDashedConnectionInfo.parameters,
)
