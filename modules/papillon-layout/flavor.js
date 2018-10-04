import React from 'react';
import Container from './Container';
import Centered from './Centered';
import Grid from './Grid';
import { action } from '@storybook/addon-actions';

const container = (
  <Container className="border">Container</Container>
);

const centered = (
  <Centered />
);

const grid = (
  <Grid />
);

export {
  container,
  centered,
  grid,
};
