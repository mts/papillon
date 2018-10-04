import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from './Label';

storiesOf('Label', module)
  .add('Default', () => (
    <Label type="label" className="bg-blue" text="default label" />
  ))
  .add('Design', () => (
    <Label type="label" className="bg-blue ml-1" text="design label" />
  ))
  .add('Label theme gray', () => (
    <Label type="label" className="Label--gray" text="gray label" />
  ))
  .add('Label theme dark gray', () => (
    <Label type="label" className="Label--gray-darker" text="dark gray label" />
  ))
  .add('Label theme orange', () => (
    <Label type="label" className="Label--orange" text="orange label" />
  ))
  .add('Label outline', () => (
    <Label type="label" className="Label--outline" text="outlined label" />
  ))
  .add('Label outline green', () => (
    <Label type="label" className="Label--outline Label--outline-green" text="green outlined label" />
  ))
  .add('State', () => (
    <Label type="state" text="Default" />
  ))
  .add('State themes', () => (
    <React.Fragment>
      <Label type="state" className="State--green mr-1" text="Open" icon="git-pull-request" />
      <Label type="state" className="State--red mr-1" text="Closed" icon="git-pull-request" />
      <Label type="state" className="State--purple" text="Merged" icon="git-merge" />
    </React.Fragment>
  ))
  .add('Small states', () => (
    <React.Fragment>
      <Label type="state" className="State--green State--small mr-1" text="Open" icon="issue-opened" />
      <Label type="state" className="State--red State--small" text="Closed" icon="issue-closed" />
    </React.Fragment>
  ))
  .add('Counter', () => (
    <React.Fragment>
      <Label type="counter" className="mr-1" text="16"/>
      <Label type="counter" className="Counter--gray mr-1" text="32"/>
      <Label type="counter" className="Counter--gray-light" text="64"/>
    </React.Fragment>
  ))
  .add('Counter in tabs', () => (
    <div className="tabnav">
      <nav className="tabnav-tabs" aria-label="Foo bar">
        <a href="#url" className="tabnav-tab selected" aria-current="page">Foo tab <Label type="counter" text="23"/></a>
        <a href="#url" className="tabnav-tab ml-1">Bar tab</a>
      </nav>
    </div>
  ))
  .add('Counter in Box headers', () => (
    <div className="Box">
      <div className="Box-header">
        <h3 className="Box-title">
          Box title
          <Label type="counter" className="Counter--gray ml-1" text="3"/>
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
  ))
;
