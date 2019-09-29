import { storiesOf } from '@storybook/react'
import {
  underlineNav,
  underlineNavActions,
  underlineNavRight,
  underlineNavRightWithActions,
  underlineNavWithCounter,
} from './UnderlineNav.int.render'
import { getInfo } from '../../../../../.storybook/library'

const underlineNavInfo = getInfo('UnderlineNav')
const underlineNavActionsInfo = getInfo('UnderlineNav-actions')
const underlineNavRightInfo = getInfo('UnderlineNav--right')
const underlineNavRightWithActionsInfo = getInfo('UnderlineNav--right with actions')
const underlineNavWithCounterInfo = getInfo('UnderlineNav with Counter')

storiesOf('Navigation/UnderlineNav', module)
  .add(underlineNavInfo.text, () => underlineNav, underlineNavInfo.parameters)
  .add(underlineNavActionsInfo.text, () => underlineNavActions, underlineNavActionsInfo.parameters)
  .add(underlineNavRightInfo.text, () => underlineNavRight, underlineNavRightInfo.parameters)
  .add(underlineNavRightWithActionsInfo.text, () => underlineNavRightWithActions, underlineNavRightWithActionsInfo.parameters)
  .add(underlineNavWithCounterInfo.text, () => underlineNavWithCounter, underlineNavWithCounterInfo.parameters)
