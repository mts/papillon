import { storiesOf } from '@storybook/react'
import centered from './Centered.render'
import { getInfo } from '../../../../.storybook/library'

const centeredInfo = getInfo('Centered')

storiesOf('Layout/Centered', module).add(centeredInfo.text, () => centered, centeredInfo.parameters)
