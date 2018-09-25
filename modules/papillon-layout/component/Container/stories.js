import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './Container';

storiesOf('Container', module)
  .add('Container', () => (
    <Container className="border">Container</Container>
  ))
;
