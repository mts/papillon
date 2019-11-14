import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './CircleBadgeImage.props'
import '@primer/css/avatars/index.scss'
import '@primer/css/core/index.scss'

export const CircleBadgeImage = ({ src, className, alt }) => <img src={src} className={cx(className, 'CircleBadge-icon')} alt={alt} />

CircleBadgeImage.propTypes = propTypes

CircleBadgeImage.defaultProps = defaultProps
