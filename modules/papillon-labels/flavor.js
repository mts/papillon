import React from 'react';
import Label from './Label';
import { action } from '@storybook/addon-actions';

const labelDefault = (
  <Label type="label" className="bg-blue" text="default label" />
);

const design = (
  <Label type="label" className="bg-blue ml-1" text="design label" />
);

export {
  labelDefault,
  design,
};
