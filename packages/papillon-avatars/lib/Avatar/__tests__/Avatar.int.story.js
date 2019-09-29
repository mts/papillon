import { storiesOf } from '@storybook/react'
import { avatar, avatarSmall, avatarStackMore, avatarStackThreePlus, avatarStackTwo, avatarStackRight } from './Avatar.int.render'
import { getInfo } from '../../../../../.storybook/library'

const avatarInfo = getInfo('avatar')
const avatarSmallInfo = getInfo('avatar-small')
const avatarStackMoreInfo = getInfo('avatar-stack-more')
const avatarStackThreePlusInfo = getInfo('avatar-stack-three-plus')
const avatarStackTwoInfo = getInfo('avatar-stack-two')
const avatarStackRightInfo = getInfo('avatar-stack-right')

storiesOf('Avatars/Avatar', module)
  .add(avatarInfo.text, () => avatar, avatarInfo.parameters)
  .add(avatarSmallInfo.text, () => avatarSmall, avatarSmallInfo.parameters)
  .add(avatarStackMoreInfo.text, () => avatarStackMore, avatarStackMoreInfo.parameters)
  .add(avatarStackThreePlusInfo.text, () => avatarStackThreePlus, avatarStackThreePlusInfo.parameters)
  .add(avatarStackTwoInfo.text, () => avatarStackTwo, avatarStackTwoInfo.parameters)
  .add(avatarStackRightInfo.text, () => avatarStackRight, avatarStackRightInfo.parameters)
