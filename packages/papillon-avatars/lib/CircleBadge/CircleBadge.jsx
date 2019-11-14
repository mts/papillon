import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './CircleBadge.props'
import '@primer/css/avatars/index.scss'
import '@primer/css/core/index.scss'

export const CircleBadge = ({ size, className, children }) => (
  <a className={cx(className, `CircleBadge CircleBadge--${size}`)} title="title" href="href">
    {children}
  </a>
)

CircleBadge.propTypes = propTypes

CircleBadge.defaultProps = defaultProps
