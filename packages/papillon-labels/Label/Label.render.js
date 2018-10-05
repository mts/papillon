import React from 'react';
import { action } from '@storybook/addon-actions';
import Label from './Label';

const labelDefault = (
  <Label type="label" className="bg-blue" text="default label" />
);

const design = (
  <Label type="label" className="bg-blue ml-1" text="design label" />
);

const labelThemeGray = (
  <Label type="label" className="Label--gray" text="gray label" />
);

const labelThemeDarkGray = (
  <Label type="label" className="Label--gray-darker" text="dark gray label" />
);

const labelThemeOrange = (
  <Label type="label" className="Label--orange" text="orange label" />
);

const labelOutline = (
  <Label type="label" className="Label--outline" text="outlined label" />
);

const labelOutlineGreen = (
  <Label type="label" className="Label--outline Label--outline-green" text="green outlined label" />
);

const state = (
  <Label type="state" text="Default" />
);

const stateThemes = (
  // mts ~ Error when wrapped with React.Fragment instad of div
  // Warning: Failed prop type: Invalid prop `type` of type `symbol` supplied to `PropTable`, expected `function`.
  <div>
    <Label type="state" className="State--green mr-1" text="Open" icon="git-pull-request" />
    <Label type="state" className="State--red mr-1" text="Closed" icon="git-pull-request" />
    <Label type="state" className="State--purple" text="Merged" icon="git-merge" />
  </div>
);

const smallStates = (
  <div>
    <Label type="state" className="State--green State--small mr-1" text="Open" icon="issue-opened" />
    <Label type="state" className="State--red State--small" text="Closed" icon="issue-closed" />
  </div>
);

const counter = (
  <div>
    <Label type="counter" className="mr-1" text="16"/>
    <Label type="counter" className="Counter--gray mr-1" text="32"/>
    <Label type="counter" className="Counter--gray-light" text="64"/>
  </div>
);

const counterInTabs = (
  <div className="tabnav">
    <nav className="tabnav-tabs" aria-label="Foo bar">
      <a href="#url" className="tabnav-tab selected" aria-current="page">Foo tab <Label type="counter" text="23"/></a>
      <a href="#url" className="tabnav-tab ml-1">Bar tab</a>
    </nav>
  </div>
);

const counterInBoxHeaders = (
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
);

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
};
