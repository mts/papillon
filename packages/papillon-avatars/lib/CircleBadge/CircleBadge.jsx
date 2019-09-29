import React from 'react'
import { propTypes, defaultProps } from './CircleBadge.props'
import '@primer/css/avatars/index.scss'
import '@primer/css/core/index.scss'

export const CircleBadge = ({ size, className, children }) => (
  <a className={`CircleBadge CircleBadge--${size} ${className}`.trim()} title="title" href="href">
    {children}
  </a>
)

CircleBadge.propTypes = propTypes

CircleBadge.defaultProps = defaultProps
