import React from 'react'

const Centered =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Centered').Centered
    : require('../../../build/papillon-layout').Centered

export const centered = <Centered />
