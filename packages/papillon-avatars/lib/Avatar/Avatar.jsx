import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './Avatar.props'
import '@primer/css/avatars/index.scss'
import '@primer/css/core/index.scss'

export const Avatar = ({ className, alt, src, width, height }) => (
  <img className={cx(className, 'avatar')} alt={alt} src={src} width={width} height={height} />
)

Avatar.propTypes = propTypes

Avatar.defaultProps = defaultProps
