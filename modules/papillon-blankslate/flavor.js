import React from 'react';
import Blankslate from './Blankslate';
import { action } from '@storybook/addon-actions';

const blankslate = (
  <Blankslate>
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
);

const blankslateIcon = (
  <Blankslate icons={['git-commit', 'tag', 'git-branch']}>
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
);

const blankslateNarrow = (
  <Blankslate className="blankslate-narrow">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
);

const blankslateCapped = (
  <Blankslate className="blankslate-capped">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
);

const blankslateLarge = (
  <Blankslate className="blankslate-large">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
);

const blankslateCleanBackground = (
  <Blankslate className="blankslate-clean-background">
    <h3>This is a blank slate</h3>
    <p>Use it to provide information when no dynamic content exists.</p>
  </Blankslate>
);

export {
  blankslate,
  blankslateIcon,
  blankslateNarrow,
  blankslateCapped,
  blankslateLarge,
  blankslateCleanBackground,
};