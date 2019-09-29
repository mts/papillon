import { storiesOf } from '@storybook/react'
import container from './Container.render'
import { getInfo } from '../../../../.storybook/library'

const containerInfo = getInfo('Container')

storiesOf('Layout/Container', module).add(containerInfo.text, () => container, containerInfo.parameters)
