import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

const btn = (
  <div>
    <Button variant="button">Button</Button>
  </div>
);

const link = (
  <div>
    <Button variant="link">Button</Button>
  </div>
);

const btnPrimary = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-primary">Button</Button>
    <Button variant="button" className="btn-primary hover">hover</Button>
    <Button variant="button" className="btn-primary focus">focus</Button>
    <Button variant="button" className="btn-primary selected">selected</Button>
    <Button variant="button" className="btn-primary disabled">disabled</Button>
  </div>
);

const btnSecondary = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-secondary">Button</Button>
    <Button variant="button" className="btn-secondary hover">hover</Button>
    <Button variant="button" className="btn-secondary focus">focus</Button>
    <Button variant="button" className="btn-secondary selected">selected</Button>
    <Button variant="button" className="btn-secondary disabled">disabled</Button>
  </div>
);

const btnDanger = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-danger">Button</Button>
    <Button variant="button" className="btn-danger hover">hover</Button>
    <Button variant="button" className="btn-danger focus">focus</Button>
    <Button variant="button" className="btn-danger selected">selected</Button>
    <Button variant="button" className="btn-danger disabled">disabled</Button>
  </div>
);

export {
  btn,
  link,
  btnPrimary,
  btnSecondary,
  btnDanger
};
