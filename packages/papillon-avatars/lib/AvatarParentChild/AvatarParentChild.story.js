import { storiesOf } from '@storybook/react'
import avatarParentChild from './AvatarParentChild.render'
import { getInfo } from '../../../../.storybook/library'

const avatarParentChildInfo = getInfo('avatar-parent-child')

storiesOf('Avatars/AvatarParentChild', module).add(avatarParentChildInfo.text, () => avatarParentChild, avatarParentChildInfo.parameters)
