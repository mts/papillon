import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from './Label';

storiesOf('Label', module)
  .add('Default', () => (
    <Label className="Label bg-blue" text="default label" />
  ))
  .add('Design', () => (
    <Label className="Label bg-blue ml-1" text="design label" />
  ))
  .add('Label theme gray', () => (
    <Label className="Label Label--gray" text="gray label" />
  ))
  .add('Label theme dark gray', () => (
    <Label className="Label Label--gray-darker" text="dark gray label" />
  ))
  .add('Label theme orange', () => (
    <Label className="Label Label--orange" text="orange label" />
  ))
  .add('Label outline', () => (
    <Label className="Label Label--outline" text="outlined label" />
  ))
  .add('Label outline green', () => (
    <Label className="Label Label--outline Label--outline-green" text="green outlined label" />
  ))
  .add('State', () => (
    <Label className="State" text="Default" />
  ))
  .add('State themes', () => (
    <React.Fragment>
      <Label className="State State--green mr-1" text="Open" icon="git-pull-request" />
      <Label className="State State--red mr-1" text="Closed" icon="git-pull-request" />
      <Label className="State State--purple" text="Merged" icon="git-merge" />
    </React.Fragment>
  ))
  .add('Small states', () => (
    <React.Fragment>
      <Label className="State State--green State--small mr-1" text="Open" icon="issue-opened" />
      <Label className="State State--red State--small" text="Closed" icon="issue-closed" />
    </React.Fragment>
  ))
  .add('Counter', () => (
    <React.Fragment>
      <Label className="Counter" text="16"/>
      <Label className="Counter Counter--gray" text="32"/>
      <Label className="Counter Counter--gray-light" text="64"/>
    </React.Fragment>
  ))
;

// TODO
// <div class="tabnav">
//   <nav class="tabnav-tabs" aria-label="Foo bar">
//     <a href="#url" class="tabnav-tab selected" aria-current="page">Foo tab <span class="Counter">23</a>
//     <a href="#url" class="tabnav-tab">Bar tab</a>
//   </nav>
// </div>

// <div class="Box">
//   <div class="Box-header">
//     <h3 class="Box-title">
//       Box title
//       <span class="Counter Counter--gray">3</span>
//     </h3>
//   </div>
//   <ul>
//     <li class="Box-row">
//       Box row one
//     </li>
//     <li class="Box-row">
//       Box row two
//     </li>
//     <li class="Box-row">
//       Box row three
//     </li>
//   </ul>
// </div>
