import { storiesOf } from '@storybook/react'
import {
  // regular
  labelVariant,
  labelWhiteOnBlueVariant,
  labelWhiteOnDarkGrayVariant,
  labelWhiteOnGreenVariant,
  labelWhiteOnRedVariant,
  labelWhiteOnYellowVariant,
  labelWhiteOnPurpleVariant,
  // theme
  themeGrayVariant,
  themeDarkGrayVariant,
  themeOrangeVariant,
  themeOutlineVariant,
  themeOutlineGreenVariant,
  // state
  stateDefaultVariant,
  stateGreenVariant,
  statePurpleVariant,
  stateRedVariant,
  stateDefaultSmallVariant,
  stateGreenSmallVariant,
  statePurpleSmallVariant,
  stateRedSmallVariant,
  stateOpenVariant,
  stateClosedVariant,
  stateMergedVariant,
  // counter
  counterDefaultVariant,
  counterGrayVariant,
  counterGrayLightVariant,
} from './Label.int.render'
import { getInfo } from '../../../../../.storybook/library'

// regular
const labelVariantInfo = getInfo('labelVariant')
const labelWhiteOnBlueVariantInfo = getInfo('labelWhiteOnBlueVariant')
const labelWhiteOnDarkGrayVariantInfo = getInfo('labelWhiteOnDarkGrayVariant')
const labelWhiteOnGreenVariantInfo = getInfo('labelWhiteOnGreenVariant')
const labelWhiteOnRedVariantInfo = getInfo('labelWhiteOnRedVariant')
const labelWhiteOnYellowVariantInfo = getInfo('labelWhiteOnYellowVariant')
const labelWhiteOnPurpleVariantInfo = getInfo('labelWhiteOnPurpleVariant')

// theme
const themeGrayVariantInfo = getInfo('themeGrayVariant')
const themeDarkGrayVariantInfo = getInfo('themeDarkGrayVariant')
const themeOrangeVariantInfo = getInfo('themeOrangeVariant')
const themeOutlineVariantInfo = getInfo('themeOutlineVariant')
const themeOutlineGreenVariantInfo = getInfo('themeOutlineGreenVariant')

// state
const stateDefaultVariantInfo = getInfo('stateDefaultVariant')
const stateGreenVariantInfo = getInfo('stateGreenVariant')
const statePurpleVariantInfo = getInfo('statePurpleVariant')
const stateRedVariantInfo = getInfo('stateRedVariant')
const stateDefaultSmallVariantInfo = getInfo('stateDefaultSmallVariant')
const stateGreenSmallVariantInfo = getInfo('stateGreenSmallVariant')
const statePurpleSmallVariantInfo = getInfo('statePurpleSmallVariant')
const stateRedSmallVariantInfo = getInfo('stateRedSmallVariant')
const stateOpenVariantInfo = getInfo('stateOpenVariant')
const stateClosedVariantInfo = getInfo('stateClosedVariant')
const stateMergedVariantInfo = getInfo('stateMergedVariant')

// counter
const counterDefaultVariantInfo = getInfo('counterDefaultVariant')
const counterGrayVariantInfo = getInfo('counterGrayVariant')
const counterGrayLightVariantInfo = getInfo('counterGrayLightVariant')

storiesOf('Labels/Regular', module)
  .add(labelVariantInfo.text, () => labelVariant, labelVariantInfo.parameters)
  .add(labelWhiteOnBlueVariantInfo.text, () => labelWhiteOnBlueVariant, labelWhiteOnBlueVariantInfo.parameters)
  .add(labelWhiteOnDarkGrayVariantInfo.text, () => labelWhiteOnDarkGrayVariant, labelWhiteOnDarkGrayVariantInfo.parameters)
  .add(labelWhiteOnGreenVariantInfo.text, () => labelWhiteOnGreenVariant, labelWhiteOnGreenVariantInfo.parameters)
  .add(labelWhiteOnRedVariantInfo.text, () => labelWhiteOnRedVariant, labelWhiteOnRedVariantInfo.parameters)
  .add(labelWhiteOnYellowVariantInfo.text, () => labelWhiteOnYellowVariant, labelWhiteOnYellowVariantInfo.parameters)
  .add(labelWhiteOnPurpleVariantInfo.text, () => labelWhiteOnPurpleVariant, labelWhiteOnPurpleVariantInfo.parameters)
storiesOf('Labels/Theme', module)
  .add(themeGrayVariantInfo.text, () => themeGrayVariant, themeGrayVariantInfo.parameters)
  .add(themeDarkGrayVariantInfo.text, () => themeDarkGrayVariant, themeDarkGrayVariantInfo.parameters)
  .add(themeOrangeVariantInfo.text, () => themeOrangeVariant, themeOrangeVariantInfo.parameters)
  .add(themeOutlineVariantInfo.text, () => themeOutlineVariant, themeOutlineVariantInfo.parameters)
  .add(themeOutlineGreenVariantInfo.text, () => themeOutlineGreenVariant, themeOutlineGreenVariantInfo.parameters)
storiesOf('Labels/State', module)
  .add(stateDefaultVariantInfo.text, () => stateDefaultVariant, stateDefaultVariantInfo.parameters)
  .add(stateGreenVariantInfo.text, () => stateGreenVariant, stateGreenVariantInfo.parameters)
  .add(statePurpleVariantInfo.text, () => statePurpleVariant, statePurpleVariantInfo.parameters)
  .add(stateRedVariantInfo.text, () => stateRedVariant, stateRedVariantInfo.parameters)
  .add(stateDefaultSmallVariantInfo.text, () => stateDefaultSmallVariant, stateDefaultSmallVariantInfo.parameters)
  .add(stateGreenSmallVariantInfo.text, () => stateGreenSmallVariant, stateGreenSmallVariantInfo.parameters)
  .add(statePurpleSmallVariantInfo.text, () => statePurpleSmallVariant, statePurpleSmallVariantInfo.parameters)
  .add(stateRedSmallVariantInfo.text, () => stateRedSmallVariant, stateRedSmallVariantInfo.parameters)
  .add(stateOpenVariantInfo.text, () => stateOpenVariant, stateOpenVariantInfo.parameters)
  .add(stateClosedVariantInfo.text, () => stateClosedVariant, stateClosedVariantInfo.parameters)
  .add(stateMergedVariantInfo.text, () => stateMergedVariant, stateMergedVariantInfo.parameters)
storiesOf('Labels/Counter', module)
  .add(counterDefaultVariantInfo.text, () => counterDefaultVariant, counterDefaultVariantInfo.parameters)
  .add(counterGrayVariantInfo.text, () => counterGrayVariant, counterGrayVariantInfo.parameters)
  .add(counterGrayLightVariantInfo.text, () => counterGrayLightVariant, counterGrayLightVariantInfo.parameters)
