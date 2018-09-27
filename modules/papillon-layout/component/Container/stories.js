import React from 'react';
import { storiesOf } from '@storybook/react';
import Container from './Container';

storiesOf('Layout', module)
  .add('Container', () => (
    <Container className="border">Container</Container>
  ))
;
