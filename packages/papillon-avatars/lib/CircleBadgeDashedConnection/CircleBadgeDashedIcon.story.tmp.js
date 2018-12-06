import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import circleBadgeDashedConnection from './CircleBadgeDashedIcon.render'
import { getInfo } from '../../../../.storybook/utility'

const circleBadgeDashedConnectionInfo = getInfo('Flash messages')

storiesOf('Avatar/CircleBadgeDashedIcon', module)
  .add(circleBadgeDashedConnectionInfo.text, () => circleBadgeDashedConnection, circleBadgeDashedConnectionInfo.parameters)
