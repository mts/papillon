import React from 'react'

// const Label = process.env.NODE_ENV === 'develop'
//   ? require('./Label').default
//   : require('../lib/papillon-labels').default

const Label = require('./Label').default

const labelDefault = (
  <Label type="label" className="bg-blue">default label</Label>
)

const design = (
  <Label type="label" className="bg-blue ml-1">design label</Label>
)

const labelThemeGray = (
  <Label type="label" className="Label--gray">gray label</Label>
)

const labelThemeDarkGray = (
  <Label type="label" className="Label--gray-darker">dark gray label</Label>
)

const labelThemeOrange = (
  <Label type="label" className="Label--orange">orange label</Label>
)

const labelOutline = (
  <Label type="label" className="Label--outline">outlined label</Label>
)

const labelOutlineGreen = (
  <Label type="label" className="Label--outline Label--outline-green">green outlined label</Label>
)

const state = (
  <Label type="state">Default</Label>
)

const stateThemes = (
  // mts ~ Error when wrapped with React.Fragment instad of div
  // Warning: Failed prop type: Invalid prop `type` of type `symbol` supplied to `PropTable`, expected `function`.
  <div>
    <Label type="state" className="State--green mr-1"icon="git-pull-request">Open</Label>
    <Label type="state" className="State--red mr-1" icon="git-pull-request">Closed</Label>
    <Label type="state" className="State--purple" icon="git-merge">Merged</Label>
  </div>
)

const smallStates = (
  <div>
    <Label type="state" className="State--green State--small mr-1" icon="issue-opened">Open</Label>
    <Label type="state" className="State--red State--small" icon="issue-closed">Closed</Label>
  </div>
)

const counter = (
  <div>
    <Label type="counter" className="mr-1">16</Label>
    <Label type="counter" className="Counter--gray mr-1">32</Label>
    <Label type="counter" className="Counter--gray-light">64</Label>
  </div>
)

const counterInTabs = (
  <div className="tabnav">
    <nav className="tabnav-tabs" aria-label="Foo bar">
      <a href="#url" className="tabnav-tab selected" aria-current="page">
        Foo tab
        <Label type="counter">23</Label>
      </a>
      <a href="#url" className="tabnav-tab ml-1">
        Bar tab
      </a>
    </nav>
  </div>
)

const counterInBoxHeaders = (
  <div className="Box">
    <div className="Box-header">
      <h3 className="Box-title">
        Box title
        <Label type="counter" className="Counter--gray ml-1">3</Label>
      </h3>
    </div>
    <ul>
      <li className="Box-row">
        Box row one
      </li>
      <li className="Box-row">
        Box row two
      </li>
      <li className="Box-row">
        Box row three
      </li>
    </ul>
  </div>
)

export {
  labelDefault,
  design,
  labelThemeGray,
  labelThemeDarkGray,
  labelThemeOrange,
  labelOutline,
  labelOutlineGreen,
  state,
  stateThemes,
  smallStates,
  counter,
  counterInTabs,
  counterInBoxHeaders,
}
