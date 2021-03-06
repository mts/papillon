import { storiesOf } from '@storybook/react'
import { breadcrumb } from './Breadcrumb.int.render'
import { getInfo } from '../../../../../.storybook/library'

const breadcrumbInfo = getInfo('Breadcrumb')

storiesOf('Breadcrumb/Breadcrumb', module).add(breadcrumbInfo.text, () => breadcrumb, breadcrumbInfo.parameters)
