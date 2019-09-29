import React from 'react'

const Container =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Container').Container
    : require('../../../build/papillon-layout').Container

export const container = <Container className="border">Container</Container>
