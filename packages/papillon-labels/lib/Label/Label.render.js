import React from 'react'

// let Label
// let RegularWhiteOnBlue

// if (process.env.NODE_ENV === 'develop') {
//   Label = require('./Label').default
//   RegularWhiteOnBlue = require('./Label').RegularWhiteOnBlue
// } else {
//   Label = require('../../build/papillon-labels').default
//   RegularWhiteOnBlue = require('../../build/papillon-labels').RegularWhiteOnBlue
// }

const Label = process.env.NODE_ENV === 'develop'
  ? require('./Label').default
  : require('../../build/papillon-labels').default

const regularWhiteOnBlue = (
  <Label variant="regular-white-on-blue">papillon regular label</Label>
)

// const labelDefault = (
//   <Label variant="label" className="bg-blue">default label</Label>
// )

// const design = (
//   <Label variant="label" className="bg-blue ml-1">design label</Label>
// )

// const labelThemeGray = (
//   <Label variant="label" className="Label--gray">gray label</Label>
// )

// const labelThemeDarkGray = (
//   <Label variant="label" className="Label--gray-darker">dark gray label</Label>
// )

// const labelThemeOrange = (
//   <Label variant="label" className="Label--orange">orange label</Label>
// )

// const labelOutline = (
//   <Label variant="label" className="Label--outline">outlined label</Label>
// )

// const labelOutlineGreen = (
//   <Label variant="label" className="Label--outline Label--outline-green">green outlined label</Label>
// )

// const state = (
//   <Label variant="state">Default</Label>
// )

// const stateThemes = (
//   // mts ~ Error when wrapped with React.Fragment instad of div
//   // Warning: Failed prop type: Invalid prop `type` of type `symbol` supplied to `PropTable`, expected `function`.
//   <div>
//     <Label variant="state" className="State--green mr-1"icon="git-pull-request">Open</Label>
//     <Label variant="state" className="State--red mr-1" icon="git-pull-request">Closed</Label>
//     <Label variant="state" className="State--purple" icon="git-merge">Merged</Label>
//   </div>
// )

// const smallStates = (
//   <div>
//     <Label variant="state" className="State--green State--small mr-1" icon="issue-opened">Open</Label>
//     <Label variant="state" className="State--red State--small" icon="issue-closed">Closed</Label>
//   </div>
// )

// const counter = (
//   <div>
//     <Label variant="counter" className="mr-1">16</Label>
//     <Label variant="counter" className="Counter--gray mr-1">32</Label>
//     <Label variant="counter" className="Counter--gray-light">64</Label>
//   </div>
// )

// const counterInTabs = (
//   <div className="tabnav">
//     <nav className="tabnav-tabs" aria-label="Foo bar">
//       <a href="#url" className="tabnav-tab selected" aria-current="page">
//         Foo tab
//         <Label variant="counter">23</Label>
//       </a>
//       <a href="#url" className="tabnav-tab ml-1">
//         Bar tab
//       </a>
//     </nav>
//   </div>
// )

// const counterInBoxHeaders = (
//   <div className="Box">
//     <div className="Box-header">
//       <h3 className="Box-title">
//         Box title
//         <Label variant="counter" className="Counter--gray ml-1">3</Label>
//       </h3>
//     </div>
//     <ul>
//       <li className="Box-row">
//         Box row one
//       </li>
//       <li className="Box-row">
//         Box row two
//       </li>
//       <li className="Box-row">
//         Box row three
//       </li>
//     </ul>
//   </div>
// )

export {
  regularWhiteOnBlue,
  // labelDefault,
  // design,
  // labelThemeGray,
  // labelThemeDarkGray,
  // labelThemeOrange,
  // labelOutline,
  // labelOutlineGreen,
  // state,
  // stateThemes,
  // smallStates,
  // counter,
  // counterInTabs,
  // counterInBoxHeaders,
}
