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
  .add('blankslate-icon', () => (
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
   .add('blankslate-large', () => (
    <BlankSlate className="blankslate-large">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </BlankSlate>
  ))
   .add('blankslate-clean-background', () => (
    <BlankSlate className="blankslate-clean-background">
      <h3>This is a blank slate</h3>
      <p>Use it to provide information when no dynamic content exists.</p>
    </BlankSlate>
  ))
;
