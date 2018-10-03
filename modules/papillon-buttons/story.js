import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  btn,
  link,
  btnPrimary,
  btnSecondary,
  btnDanger,
  btnOutline,
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
  .add('btn-blue', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-blue">Button</Button>
      <Button variant="button" className="btn-blue hover">hover</Button>
      <Button variant="button" className="btn-blue focus">focus</Button>
      <Button variant="button" className="btn-blue selected">selected</Button>
      <Button variant="button" className="btn-blue disabled">disabled</Button>
    </div>
  ))
  .add('btn-purple', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-purple">Button</Button>
      <Button variant="button" className="btn-purple hover">hover</Button>
      <Button variant="button" className="btn-purple focus">focus</Button>
      <Button variant="button" className="btn-purple selected">selected</Button>
      <Button variant="button" className="btn-purple disabled">disabled</Button>
    </div>
  ))
  .add('btn-large', () => (
    // mts ~ btn-outline-blue does not exist
    <div className='f3 p-4'>
      <Button variant="link"className="btn-large btn-purple mr-6">Large link button</Button>
      <Button variant="button"className="btn-large btn-outline-blue">Large button button</Button>
    </div>
  ))
  .add('btn-link', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button-link">Button Link</Button>
    </div>
  ))
;
