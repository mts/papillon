import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import grid from './Grid.render'

storiesOf('Layout/Grid', module)
  .add('Grid', withNotes('Must render Layout ~ Grid')
      (withInfo('Grid')(() => grid)))

