import React from 'react';
import Button from './Button';
import { action } from '@storybook/addon-actions';

const btn = (
  <div>
    <Button variant="button">Button</Button>
  </div>
);

const link = (
  <div>
    <Button variant="link">Button</Button>
  </div>
);

export {
  btn,
  link,
};
