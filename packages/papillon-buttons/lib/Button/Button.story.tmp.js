import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import {
  btn,
  link,
  btnSmall,
  btnPrimary,
  btnSecondary,
  btnDanger,
  btnOutline,
  btnBlue,
  btnPurple,
  btnLarge,
  btnLink,
} from './Button.render'
import { getInfo } from '../../../../.storybook/utility'

const btnInfo = getInfo('btn')
const linkInfo = getInfo('link')
const btnSmallInfo = getInfo('btn-sm')
const btnPrimaryInfo = getInfo('btn-primary')
const btnSecondaryInfo = getInfo('btn-secondary')
const btnDangerInfo = getInfo('btn-danger')
const btnOutlineInfo = getInfo('btn-outline')
const btnBlueInfo = getInfo('btn-blue')
const btnPurpleInfo = getInfo('btn-purple')
const btnLargeInfo = getInfo('btn-large')
const btnLinkInfo = getInfo('btn-link')

storiesOf('Button/Button', module)
  .add(btnInfo.text, () => btn, btnInfo.parameters)
  .add(linkInfo.text, () => link, linkInfo.parameters)
  .add(btnSmallInfo.text, () => btnSmall, btnSmallInfo.parameters)
  .add(btnPrimaryInfo.text, () => btnPrimary, btnPrimaryInfo.parameters)
  .add(btnSecondaryInfo.text, () => btnSecondary, btnSecondaryInfo.parameters)
  .add(btnDangerInfo.text, () => btnDanger, btnDangerInfo.parameters)
  .add(btnOutlineInfo.text, () => btnOutline, btnOutlineInfo.parameters)
  .add(btnBlueInfo.text, () => btnBlue, btnBlueInfo.parameters)
  .add(btnPurpleInfo.text, () => btnPurple, btnPurpleInfo.parameters)
  .add(btnLargeInfo.text, () => btnLarge, btnLargeInfo.parameters)
  .add(btnLinkInfo.text, () => btnLink, btnLinkInfo.parameters)
