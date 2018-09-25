import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('btn', () => (
    <div>
      <Button variant="button" className="mr-6">Button button</Button>
      <Button variant="link">Link button</Button>
    </div>
  ))
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
;
