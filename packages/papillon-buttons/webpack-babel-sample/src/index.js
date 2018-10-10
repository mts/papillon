import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'papillon-buttons';

ReactDOM.render(
  <div>
    <h3 className="pl-4">btn</h3>
    <div className="pl-4 pb-4">
      <Button variant="button">Button</Button>
    </div>

    <h3 className="pl-4">link</h3>
    <div className="pl-4 pb-4">
      <Button variant="link">Button</Button>
    </div>

    <h3 className="pl-4">btnSmall</h3>
    <div className='f3 p-4'>
      <Button variant="link"className="btn-sm btn-purple mr-6">Small link button</Button>
      <Button variant="button"className="btn-sm btn-outline-blue">Small button button</Button>
    </div>

    <h3 className="pl-4">btnPrimary</h3>
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-primary">Button</Button>
      <Button variant="button" className="btn-primary hover">hover</Button>
      <Button variant="button" className="btn-primary focus">focus</Button>
      <Button variant="button" className="btn-primary selected">selected</Button>
      <Button variant="button" className="btn-primary disabled">disabled</Button>
    </div>

    <h3 className="pl-4">btnSecondary</h3>
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-secondary">Button</Button>
      <Button variant="button" className="btn-secondary hover">hover</Button>
      <Button variant="button" className="btn-secondary focus">focus</Button>
      <Button variant="button" className="btn-secondary selected">selected</Button>
      <Button variant="button" className="btn-secondary disabled">disabled</Button>
    </div>

    <h3 className="pl-4">btnDanger</h3>
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-danger">Button</Button>
      <Button variant="button" className="btn-danger hover">hover</Button>
      <Button variant="button" className="btn-danger focus">focus</Button>
      <Button variant="button" className="btn-danger selected">selected</Button>
      <Button variant="button" className="btn-danger disabled">disabled</Button>
    </div>

    <h3 className="pl-4">btnOutline</h3>
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-outline">Button</Button>
      <Button variant="button" className="btn-outline hover">hover</Button>
      <Button variant="button" className="btn-outline focus">focus</Button>
      <Button variant="button" className="btn-outline selected">selected</Button>
      <Button variant="button" className="btn-outline disabled">disabled</Button>
    </div>

    <h3 className="pl-4">btnBlue</h3>
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-blue">Button</Button>
      <Button variant="button" className="btn-blue hover">hover</Button>
      <Button variant="button" className="btn-blue focus">focus</Button>
      <Button variant="button" className="btn-blue selected">selected</Button>
      <Button variant="button" className="btn-blue disabled">disabled</Button>
    </div>

    <h3 className="pl-4">btnPurple</h3>
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button" className="btn-purple">Button</Button>
      <Button variant="button" className="btn-purple hover">hover</Button>
      <Button variant="button" className="btn-purple focus">focus</Button>
      <Button variant="button" className="btn-purple selected">selected</Button>
      <Button variant="button" className="btn-purple disabled">disabled</Button>
    </div>

    <h3 className="pl-4">btnLarge</h3>
    <div className='f3 p-4'>
      <Button variant="link"className="btn-large btn-purple mr-6">Large link button</Button>
      <Button variant="button"className="btn-large btn-outline-blue">Large button button</Button>
    </div>

    <h3 className="pl-4">button-link</h3>
    <div className='p-4 d-flex flex-justify-between'>
      <Button variant="button-link">Button Link</Button>
    </div>
  </div>,
  document.getElementById('app'),
);

module.hot.accept();
