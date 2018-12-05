import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import circleBadgeDashedConnection from './CircleBadgeDashedIcon.render'

storiesOf('Avatar/CircleBadgeDashedIcon', module)
  .add('DashedConnection', withNotes('Must render CircleBadge ~ DashedConnection')
      (withInfo('DashedConnection')(() => circleBadgeDashedConnection)))

