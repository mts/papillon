import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './Button';

storiesOf('Button', module)
  .add('Default', () => (
    <div>
      <Button type="button" className="mr-6">Button button</Button>
      <Button type="link">Link button</Button>
    </div>
  ))
;
