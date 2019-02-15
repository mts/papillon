import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import avatarParentChild from './AvatarParentChild.render'
import { getInfo } from '../../../../.storybook/utility'

const avatarParentChildInfo = getInfo('avatar-parent-child')

storiesOf('Avatars/AvatarParentChild', module).add(avatarParentChildInfo.text, () => avatarParentChild, avatarParentChildInfo.parameters)
