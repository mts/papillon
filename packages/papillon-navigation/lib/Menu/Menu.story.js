import { storiesOf } from '@storybook/react'
import { menu, menuWithIconAvatarCounter, menuWithHeading } from './Menu.render'
import { getInfo } from '../../../../.storybook/library'

const menuInfo = getInfo('Menu')
const menuWithIconAvatarCounterInfo = getInfo('Menu with octicons, avatars and counters')
const menuWithHeadingInfo = getInfo('Menu with heading')

storiesOf('Navigation/Menu', module)
  .add(menuInfo.text, () => menu, menuInfo.parameters)
  .add(menuWithIconAvatarCounterInfo.text, () => menuWithIconAvatarCounter, menuWithIconAvatarCounterInfo.parameters)
  .add(menuWithHeadingInfo.text, () => menuWithHeading, menuWithHeadingInfo.parameters)
