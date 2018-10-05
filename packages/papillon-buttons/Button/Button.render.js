import React from 'react';
import { action } from '@storybook/addon-actions';
import Button from './Button';

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

const btnOutline = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-outline">Button</Button>
    <Button variant="button" className="btn-outline hover">hover</Button>
    <Button variant="button" className="btn-outline focus">focus</Button>
    <Button variant="button" className="btn-outline selected">selected</Button>
    <Button variant="button" className="btn-outline disabled">disabled</Button>
  </div>
);

const btnBlue = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-blue">Button</Button>
    <Button variant="button" className="btn-blue hover">hover</Button>
    <Button variant="button" className="btn-blue focus">focus</Button>
    <Button variant="button" className="btn-blue selected">selected</Button>
    <Button variant="button" className="btn-blue disabled">disabled</Button>
  </div>
);

const btnPurple = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-purple">Button</Button>
    <Button variant="button" className="btn-purple hover">hover</Button>
    <Button variant="button" className="btn-purple focus">focus</Button>
    <Button variant="button" className="btn-purple selected">selected</Button>
    <Button variant="button" className="btn-purple disabled">disabled</Button>
  </div>
);

const btnLarge = (
  // mts ~ btn-outline-blue does not exist
  <div className='f3 p-4'>
    <Button variant="link"className="btn-large btn-purple mr-6">Large link button</Button>
    <Button variant="button"className="btn-large btn-outline-blue">Large button button</Button>
  </div>
);

const btnLink = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button-link">Button Link</Button>
  </div>
);

export {
  btn,
  link,
  btnPrimary,
  btnSecondary,
  btnDanger,
  btnOutline,
  btnBlue,
  btnPurple,
  btnLarge,
  btnLink,
};
