import React from 'react'
import { propTypes, defaultProps } from './CircleBadgeImage.props'
import '@primer/css/avatars/index.scss'
import '@primer/css/core/index.scss'

export const CircleBadgeImage = ({ src, className, alt }) => <img src={src} className={`CircleBadge-icon ${className}`.trim()} alt={alt} />

CircleBadgeImage.propTypes = propTypes

CircleBadgeImage.defaultProps = defaultProps
