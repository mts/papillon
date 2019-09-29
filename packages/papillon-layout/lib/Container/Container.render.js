import React from 'react'

const Container =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('./Container').default
    : require('../../build/papillon-layout').Container

const container = <Container className="border">Container</Container>

export default container
