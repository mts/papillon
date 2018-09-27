import React from 'react';
import {string} from 'prop-types';

const CircleBadgeImage = ({src, className, alt}) => (
  <img
    src={src}
    className={`CircleBadge-icon ${className}`}
    alt={alt}
  />
);

CircleBadgeImage.defaultProps = {
  className: ''
};

CircleBadgeImage.propTypes = {
  src: string.isRequired,
  className: string,
  alt: string.isRequired
};

export default CircleBadgeImage;
