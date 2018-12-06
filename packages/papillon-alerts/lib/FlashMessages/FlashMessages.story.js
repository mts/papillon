import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import flashMessages from './FlashMessages.render'
import { getInfo } from '../../../../.storybook/utility'

const flashMessagesInfo = getInfo('Flash messages')

storiesOf('Alerts/FlashMessages', module)
  .add(flashMessagesInfo.text, () => flashMessages, flashMessagesInfo.parameters)
