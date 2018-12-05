import { storiesOf } from '@storybook/react'
import { getInfo } from '../../../../.storybook/utility'
import {
  flashAlertDefault,
  multipleParagraphs,
  flashWarn,
  flashError,
  flashSuccess,
  flashIcon,
  withDismiss,
  withActionButton,
  fullWidthFlash,
} from './FlashAlert.render'

const flashAlertDefaultInfo = getInfo('Default')
const multipleParagraphsInfo = getInfo('Multiple paragraphs')
const flashWarnInfo = getInfo('flash-warn')
const flashErrorInfo = getInfo('flash-error')
const flashSuccessInfo = getInfo('flash-success')
const flashIconInfo = getInfo('flash-icon')
const withDismissInfo = getInfo('with-dismiss')
const withActionButtonInfo = getInfo('with-action-button')
const fullWidthFlashInfo = getInfo('full-width-flash')

storiesOf('Flash alerts/FlashAlert', module)
  .add(flashAlertDefaultInfo.text, () => flashAlertDefault, flashAlertDefaultInfo.parameters)
  .add(multipleParagraphsInfo.text, () => multipleParagraphs, multipleParagraphsInfo.parameters)
  .add(flashWarnInfo.text, () => flashWarn, flashWarnInfo.parameters)
  .add(flashErrorInfo.text, () => flashError, flashErrorInfo.parameters)
  .add(flashSuccessInfo.text, () => flashSuccess, flashSuccessInfo.parameters)
  .add(flashIconInfo.text, () => flashIcon, flashIconInfo.parameters)
  .add(withDismissInfo.text, () => withDismiss, withDismissInfo.parameters)
  .add(withActionButtonInfo.text, () => withActionButton, withActionButtonInfo.parameters)
  .add(fullWidthFlashInfo.text, () => fullWidthFlash, fullWidthFlashInfo.parameters)
