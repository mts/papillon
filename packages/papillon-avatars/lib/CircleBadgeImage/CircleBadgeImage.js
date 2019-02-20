import React from 'react'
import { string } from 'prop-types'
import '@primer/css/avatars/index.scss'
import '@primer/css/utilities/index.scss'

const CircleBadgeImage = ({ src, className, alt }) => <img src={src} className={`CircleBadge-icon ${className}`.trim()} alt={alt} />

CircleBadgeImage.defaultProps = {
  className: '',
}

CircleBadgeImage.propTypes = {
  src: string.isRequired,
  className: string,
  alt: string.isRequired,
}

export default CircleBadgeImage
