import React from 'react'

// const Container = process.env.NODE_ENV === 'develop'
//   ? require('./Container').default
//   : require('../lib/papillon-layout').Container;

const Container = require('./Container').default

const container = (
  <Container className="border">Container</Container>
)

export default container
