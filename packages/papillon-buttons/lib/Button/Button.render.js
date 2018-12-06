import React from 'react'
import { action } from '@storybook/addon-actions'

const Button = process.env.NODE_ENV === 'develop'
  ? require('./Button').default
  : require('../../build/papillon-buttons').default;

const btn = (
  <div>
    <Button variant="button" onClick={action('button-click')}>Button</Button>
  </div>
)

const link = (
  <div>
    <Button variant="link" onClick={action('button-click')}>Button</Button>
  </div>
)

const btnSmall = (
  <div className='f3 p-4'>
    <Button variant="link"className="btn-sm btn-purple mr-6" onClick={action('button-click')}>Small link button</Button>
    <Button variant="button"className="btn-sm btn-outline-blue" onClick={action('button-click')}>Small button button</Button>
  </div>
)


const btnPrimary = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-primary" onClick={action('button-click')}>Button</Button>
    <Button variant="button" className="btn-primary hover" onClick={action('button-click')}>hover</Button>
    <Button variant="button" className="btn-primary focus" onClick={action('button-click')}>focus</Button>
    <Button variant="button" className="btn-primary selected" onClick={action('button-click')}>selected</Button>
    <Button variant="button" className="btn-primary disabled" onClick={action('button-click')}>disabled</Button>
  </div>
)

const btnSecondary = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-secondary" onClick={action('button-click')}>Button</Button>
    <Button variant="button" className="btn-secondary hover" onClick={action('button-click')}>hover</Button>
    <Button variant="button" className="btn-secondary focus" onClick={action('button-click')}>focus</Button>
    <Button variant="button" className="btn-secondary selected" onClick={action('button-click')}>selected</Button>
    <Button variant="button" className="btn-secondary disabled" onClick={action('button-click')}>disabled</Button>
  </div>
)

const btnDanger = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-danger" onClick={action('button-click')}>Button</Button>
    <Button variant="button" className="btn-danger hover" onClick={action('button-click')}>hover</Button>
    <Button variant="button" className="btn-danger focus" onClick={action('button-click')}>focus</Button>
    <Button variant="button" className="btn-danger selected" onClick={action('button-click')}>selected</Button>
    <Button variant="button" className="btn-danger disabled" onClick={action('button-click')}>disabled</Button>
  </div>
)

const btnOutline = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-outline" onClick={action('button-click')}>Button</Button>
    <Button variant="button" className="btn-outline hover" onClick={action('button-click')}>hover</Button>
    <Button variant="button" className="btn-outline focus" onClick={action('button-click')}>focus</Button>
    <Button variant="button" className="btn-outline selected" onClick={action('button-click')}>selected</Button>
    <Button variant="button" className="btn-outline disabled" onClick={action('button-click')}>disabled</Button>
  </div>
)

const btnBlue = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-blue" onClick={action('button-click')}>Button</Button>
    <Button variant="button" className="btn-blue hover" onClick={action('button-click')}>hover</Button>
    <Button variant="button" className="btn-blue focus" onClick={action('button-click')}>focus</Button>
    <Button variant="button" className="btn-blue selected" onClick={action('button-click')}>selected</Button>
    <Button variant="button" className="btn-blue disabled" onClick={action('button-click')}>disabled</Button>
  </div>
)

const btnPurple = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button" className="btn-purple" onClick={action('button-click')}>Button</Button>
    <Button variant="button" className="btn-purple hover" onClick={action('button-click')}>hover</Button>
    <Button variant="button" className="btn-purple focus" onClick={action('button-click')}>focus</Button>
    <Button variant="button" className="btn-purple selected" onClick={action('button-click')}>selected</Button>
    <Button variant="button" className="btn-purple disabled" onClick={action('button-click')}>disabled</Button>
  </div>
)

const btnLarge = (
  // mts ~ btn-outline-blue does not exist
  <div className='f3 p-4'>
    <Button variant="link"className="btn-large btn-purple mr-6" onClick={action('button-click')}>Large link button</Button>
    <Button variant="button"className="btn-large btn-outline-blue" onClick={action('button-click')}>Large button button</Button>
  </div>
)

const btnLink = (
  <div className='p-4 d-flex flex-justify-between'>
    <Button variant="button-link" onClick={action('button-click')}>Button Link</Button>
  </div>
)

export {
  btn,
  link,
  btnSmall,
  btnPrimary,
  btnSecondary,
  btnDanger,
  btnOutline,
  btnBlue,
  btnPurple,
  btnLarge,
  btnLink,
}
