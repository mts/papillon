// Label stories for Storybook

import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from './Label';

storiesOf('Label', module)
  .add('Default', () => (
    <Label className="Label bg-blue" text="default label" />
  ))
;
