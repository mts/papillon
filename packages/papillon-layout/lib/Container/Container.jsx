import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './Container.props'
import '@primer/css/layout/index.scss'
import '@primer/css/core/index.scss'

export const Container = ({ className, children }) => <div className={cx(className, 'container')}>{children}</div>

Container.defaultProps = defaultProps

Container.propTypes = propTypes
