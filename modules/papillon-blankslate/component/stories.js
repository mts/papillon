import React from 'react';
import { storiesOf } from '@storybook/react';
import BlankSlate from './BlankSlate';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'

storiesOf('Blankslate', module)
  .add('Basic', () => (
    <BlankSlate>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </BlankSlate>
  ))
  .add('With Octicons', () => (
    <BlankSlate icons={['git-commit', 'tag', 'git-branch']}>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </BlankSlate>
  ))
;
