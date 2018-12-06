import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import {
  labelDefault,
  design,
  labelThemeGray,
  labelThemeDarkGray,
  labelThemeOrange,
  labelOutline,
  labelOutlineGreen,
  state,
  stateThemes,
  smallStates,
  counter,
  counterInTabs,
  counterInBoxHeaders,
} from './Label.render'
import { getInfo } from '../../../../.storybook/utility'

const labelDefaultInfo = getInfo('Default')
const designInfo = getInfo('Design')
const labelThemeGrayInfo = getInfo('Label theme gray')
const labelThemeDarkGrayInfo = getInfo('Label theme dark gray')
const labelThemeOrangeInfo = getInfo('Label theme orange')
const labelOutlineInfo = getInfo('Label outline')
const labelOutlineGreenInfo = getInfo('Label outline green')
const stateInfo = getInfo('State')
const stateThemesInfo = getInfo('State themes')
const smallStatesInfo = getInfo('Small states')
const counterInfo = getInfo('Counter')
const counterInTabsInfo = getInfo('Counter in box')
const counterInBoxHeadersInfo = getInfo('Counter in Box Headers')

storiesOf('Label/Label', module)
  .add(labelDefaultInfo.text, () => labelDefault, labelDefaultInfo.parameters)
  .add(designInfo.text, () => design, designInfo.parameters)
  .add(labelThemeGrayInfo.text, () => labelThemeGray, labelThemeGrayInfo.parameters)
  .add(labelThemeDarkGrayInfo.text, () => labelThemeDarkGray, labelThemeDarkGrayInfo.parameters)
  .add(labelThemeOrangeInfo.text, () => labelThemeOrange, labelThemeOrangeInfo.parameters)
  .add(labelOutlineInfo.text, () => labelOutline, labelOutlineInfo.parameters)
  .add(labelOutlineGreenInfo.text, () => labelOutlineGreen, labelOutlineGreenInfo.parameters)
  .add(stateInfo.text, () => state, stateInfo.parameters)
  .add(stateThemesInfo.text, () => stateThemes, stateThemesInfo.parameters)
  .add(smallStatesInfo.text, () => smallStates, smallStatesInfo.parameters)
  .add(counterInfo.text, () => counter, counterInfo.parameters)
  .add(counterInTabsInfo.text, () => counterInTabs, counterInTabsInfo.parameters)
  .add(counterInBoxHeadersInfo.text, () => counterInBoxHeaders, counterInBoxHeadersInfo.parameters)
