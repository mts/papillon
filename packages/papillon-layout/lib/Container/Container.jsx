import React from 'react'
import { propTypes, defaultProps } from './Container.props'
import '@primer/css/layout/index.scss'
import '@primer/css/core/index.scss'

export const Container = ({ className, children }) => <div className={`container ${className}`.trim()}>{children}</div>

Container.defaultProps = defaultProps

Container.propTypes = propTypes
