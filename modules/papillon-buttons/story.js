import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  btn,
  link
} from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';
import Button from './Button';

storiesOf('Button', module)
  .add('btn', withNotes('Must render Button ~ btn')
      (withInfo('btn')(() => btn)))
  .add('link', withNotes('Must render Button ~ link')
      (withInfo('link')(() => link)))
  .add('btn-primary', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-primary">Button</Button>
      <Button variant="button" className="btn-primary hover">hover</Button>
      <Button variant="button" className="btn-primary focus">focus</Button>
      <Button variant="button" className="btn-primary selected">selected</Button>
      <Button variant="button" className="btn-primary disabled">disabled</Button>
    </div>
  ))
  .add('btn-secondary', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-secondary">Button</Button>
      <Button variant="button" className="btn-secondary hover">hover</Button>
      <Button variant="button" className="btn-secondary focus">focus</Button>
      <Button variant="button" className="btn-secondary selected">selected</Button>
      <Button variant="button" className="btn-secondary disabled">disabled</Button>
    </div>
  ))
  .add('btn-danger', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-danger">Button</Button>
      <Button variant="button" className="btn-danger hover">hover</Button>
      <Button variant="button" className="btn-danger focus">focus</Button>
      <Button variant="button" className="btn-danger selected">selected</Button>
      <Button variant="button" className="btn-danger disabled">disabled</Button>
    </div>
  ))
  .add('btn-outline', () => (
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-outline">Button</Button>
      <Button variant="button" className="btn-outline hover">hover</Button>
      <Button variant="button" className="btn-outline focus">focus</Button>
      <Button variant="button" className="btn-outline selected">selected</Button>
      <Button variant="button" className="btn-outline disabled">disabled</Button>
    </div>
  ))
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
