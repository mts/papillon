import React from 'react'

const Centered = process.env.NODE_ENV === 'develop' ? require('./Centered').default : require('../../build/papillon-layout').Centered

const centered = <Centered />

export default centered
