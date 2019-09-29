import { storiesOf } from '@storybook/react'
import flashMessages from './FlashMessages.render'
import { getInfo } from '../../../../.storybook/library'

const flashMessagesInfo = getInfo('Flash messages')

storiesOf('Alerts/FlashMessages', module).add(flashMessagesInfo.text, () => flashMessages, flashMessagesInfo.parameters)
