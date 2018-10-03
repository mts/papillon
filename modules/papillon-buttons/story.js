import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  btn,
  link,
  btnPrimary,
  btnSecondary,
  btnDanger,
  btnOutline,
  btnBlue,
  btnPurple,
  btnLarge,
} from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import Button from './Button';

storiesOf('Button', module)
  .add('btn', withNotes('Must render Button ~ btn')
      (withInfo('btn')(() => btn)))
  .add('link', withNotes('Must render Button ~ link')
      (withInfo('link')(() => link)))
  .add('btn-primary', withNotes('Must render Button ~ btn-primary')
      (withInfo('btn-primary')(() => btnPrimary)))
  .add('btn-secondary', withNotes('Must render Button ~ btn-secondary')
      (withInfo('btn-secondary')(() => btnSecondary)))
  .add('btn-danger', withNotes('Must render Button ~ btn-danger')
      (withInfo('btn-danger')(() => btnDanger)))
  .add('btn-outline', withNotes('Must render Button ~ btn-outline')
      (withInfo('btn-outline')(() => btnOutline)))
  .add('btn-blue', withNotes('Must render Button ~ btn-blue')
      (withInfo('btn-blue')(() => btnBlue)))
  .add('btn-purple', withNotes('Must render Button ~ btn-purple')
      (withInfo('btn-purple')(() => btnPurple)))
  .add('btn-large', withNotes('Must render Button ~ btn-large')
      (withInfo('btn-large')(() => btnLarge)))
  .add('btn-link', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button-link">Button Link</Button>
    </div>
  ))
;
