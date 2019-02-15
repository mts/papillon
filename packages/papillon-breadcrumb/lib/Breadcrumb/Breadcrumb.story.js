import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import breadcrumb from './Breadcrumb.render'
import { getInfo } from '../../../../.storybook/utility'

const breadcrumbInfo = getInfo('Breadcrumb')

storiesOf('Breadcrumb/Breadcrumb', module).add(breadcrumbInfo.text, () => breadcrumb, breadcrumbInfo.parameters)
