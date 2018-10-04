import React from 'react';
import Container from './Container';
import Centered from './Centered';
import { action } from '@storybook/addon-actions';

const container = (
  <Container className="border">Container</Container>
);

const centered = (
  <Centered />
);

export {
  container,
  centered,
};
