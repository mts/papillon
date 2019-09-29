import React from 'react'

const Blankslate =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Blankslate').Blankslate
    : require('../../../build/papillon-blankslate').Blankslate

export const blankslate = (
  <Blankslate>
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
)

export const blankslateIcon = (
  <Blankslate icons={['git-commit', 'tag', 'git-branch']}>
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
)

export const blankslateNarrow = (
  <Blankslate className="blankslate-narrow">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
)

export const blankslateCapped = (
  <Blankslate className="blankslate-capped">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
)

export const blankslateSpacious = (
  <Blankslate className="blankslate-spacious">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
)

export const blankslateLarge = (
  <Blankslate className="blankslate-large">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
)

export const blankslateCleanBackground = (
  <Blankslate className="blankslate-clean-background">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
)
