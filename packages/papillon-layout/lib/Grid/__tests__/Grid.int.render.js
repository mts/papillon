import React from 'react'

const Grid =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Grid').Grid
    : require('../../../build/papillon-layout').Grid

export const grid = <Grid />
