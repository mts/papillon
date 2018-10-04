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

export {
  labelDefault,
  design,
  labelThemeGray,
  labelThemeDarkGray,
};
