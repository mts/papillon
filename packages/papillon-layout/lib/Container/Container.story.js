import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import container from './Container.render'
import { getInfo } from '../../../../.storybook/utility'

const containerInfo = getInfo('Container')

storiesOf('Layout/Container', module)
  .add(containerInfo.text, () => container, containerInfo.parameters)
