import React from 'react';
import { storiesOf } from '@storybook/react';
import FlashAlert from './FlashAlert';
import FlashMessages from './FlashMessages';

storiesOf('Flash alerts', module)
  .add('Default', () => (
    <FlashAlert>
      Flash message goes here.
    </FlashAlert>
  ))
  .add('Multiple paragraphs', () => (
    <FlashAlert>
      <p>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</p>
      <p>And this is another paragraph.</p>
    </FlashAlert>
  ))
  .add('Flash messages', () => (
    <FlashMessages>
      <FlashAlert>
        Flash message goes here.
      </FlashAlert>
    </FlashMessages>
  ))
;
