import React from 'react';
import { storiesOf } from '@storybook/react';
import Alert from './Alert';

storiesOf('Flash alerts', module)
  .add('Default', () => (
    <Alert text="Flash message goes here."></Alert>
  ))
;
