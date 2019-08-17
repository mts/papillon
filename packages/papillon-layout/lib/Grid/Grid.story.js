import { storiesOf } from '@storybook/react'
import grid from './Grid.render'
import { getInfo } from '../../../../.storybook/utility'

const gridInfo = getInfo('Grid')

storiesOf('Layout/Grid', module).add(gridInfo.text, () => grid, gridInfo.parameters)
