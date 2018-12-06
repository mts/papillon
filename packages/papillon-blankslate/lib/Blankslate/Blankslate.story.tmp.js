import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import {
  blankslate,
  blankslateIcon,
  blankslateNarrow,
  blankslateCapped,
  blankslateSpacious,
  blankslateLarge,
  blankslateCleanBackground,
} from './Blankslate.render'
import { getInfo } from '../../../../.storybook/utility'

const blankslateInfo = getInfo('blankslate')
const blankslateIconInfo = getInfo('blankslate-icon')
const blankslateNarrowInfo = getInfo('blankslate-narrow')
const blankslateCappedInfo = getInfo('blankslate-capped')
const blankslateSpaciousInfo = getInfo('blankslate-spacious')
const blankslateLargeInfo = getInfo('blankslate-large')
const blankslateCleanBackgroundInfo = getInfo('blankslate-clean-background')

storiesOf('Blankslate/Blankslate', module)
  .add(blankslateInfo.text, () => blankslate, blankslateInfo.parameters)
  .add(blankslateIconInfo.text, () => blankslateIcon, blankslateIconInfo.parameters)
  .add(blankslateNarrowInfo.text, () => blankslateNarrow, blankslateNarrowInfo.parameters)
  .add(blankslateCappedInfo.text, () => blankslateCapped, blankslateCappedInfo.parameters)
  .add(blankslateSpaciousInfo.text, () => blankslateSpacious, blankslateSpaciousInfo.parameters)
  .add(blankslateLargeInfo.text, () => blankslateLarge, blankslateLargeInfo.parameters)
  .add(blankslateCleanBackgroundInfo.text, () => blankslateCleanBackground, blankslateCleanBackgroundInfo.parameters)
