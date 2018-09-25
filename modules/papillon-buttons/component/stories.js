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
  .add('btn-danger', () => (
    <div>
      <Button variant="button" className="btn-danger mr-6">Danger button</Button>
      <Button variant="button" className="btn btn-sm btn-danger">Small danger button</Button>
    </div>
  ))
;
