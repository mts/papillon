import React from 'react';
import { storiesOf } from '@storybook/react';
import BlankSlate from './BlankSlate';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'

storiesOf('Blankslate', module)
  .add('blankslate', () => (
    <BlankSlate>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </BlankSlate>
  ))
  .add('blankslate-with-octicons', () => (
    <BlankSlate icons={['git-commit', 'tag', 'git-branch']}>
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </BlankSlate>
  ))
  .add('blankslate-narrow', () => (
    <BlankSlate className="blankslate-narrow">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </BlankSlate>
  ))
   .add('blankslate-capped', () => (
    <BlankSlate className="blankslate-capped">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </BlankSlate>
  ))
;
