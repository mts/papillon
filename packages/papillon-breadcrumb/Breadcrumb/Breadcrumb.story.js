import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import breadcrumb from './Breadcrumb.render'

storiesOf('Breadcrumb/Breadcrumb', module)
  .add('Breadcrumb', withNotes('Must render Breadcrumb ~ Breadcrumb')
      (withInfo('Breadcrumb')(() => breadcrumb)))

