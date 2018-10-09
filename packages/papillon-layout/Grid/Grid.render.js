import React from 'react';

const Grid = process.env.NODE_ENV === 'develop'
  ? require('./Grid').default
  : require('../lib/papillon-layout').Grid;

const grid = (
  <Grid />
);

export default grid;
