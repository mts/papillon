import React from 'react';
import Label from './Label';
import { action } from '@storybook/addon-actions';

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
};
