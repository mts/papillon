import '../index.scss';
import React from 'react';
import {string, number} from 'prop-types';

const Avatar = ({className, alt, src, width, height}) =>
  <img className={`avatar ${className}`} alt={alt} src={src} width={width} height={height} />;

Avatar.defaultProps = {
  className: ''
};

Avatar.propTypes = {
  className: string,
  alt: string.isRequired,
  src: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
};

export default Avatar;
