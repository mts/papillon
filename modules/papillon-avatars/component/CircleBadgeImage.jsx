import '../index.scss';
import React from 'react';
import {string} from 'prop-types';

const CircleBadgeImage = ({src, className, alt}) =>
  <img src={src}  className={className} alt={alt} />;

CircleBadgeImage.propTypes = {
  src: string.isRequired,
  className: string.isRequired,
  alt: string.isRequired
};

export default CircleBadgeImage;
