import { storiesOf } from '@storybook/react'
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import {
  underlineNav,
  underlineNavActions,
  underlineNavRight,
  underlineNavRightWithActions,
  underlineNavWithCounter,
} from './UnderlineNav.render'

storiesOf('Navigation/UnderlineNav', module)
  .add('UnderlineNav', withNotes('Must render UnderlineNav ~ UnderlineNav')
      (withInfo('UnderlineNav')(() => underlineNav)))
  .add('UnderlineNav-actions', withNotes('Must render UnderlineNav ~ UnderlineNav-actions')
      (withInfo('UnderlineNav-actions')(() => underlineNavActions)))
  .add('UnderlineNav--right', withNotes('Must render UnderlineNav ~ UnderlineNav--right')
      (withInfo('UnderlineNav--right')(() => underlineNavRight)))
  .add('UnderlineNav--right with actions', withNotes('Must render UnderlineNav ~ UnderlineNav--right with actions')
      (withInfo('UnderlineNav--right with actions')(() => underlineNavRightWithActions)))
  .add('UnderlineNav with Counter', withNotes('Must render UnderlineNav ~ UnderlineNav with Counter')
      (withInfo('UnderlineNav with Counter')(() => underlineNavWithCounter)))

