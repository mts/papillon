import '../index.scss';
import React from 'react';
import {string, node} from 'prop-types';

const CircleBadge = ({size, className, children}) => (
  <a
    className={`CircleBadge CircleBadge--${size} ${className}`}
    title="title"
    href="href"
  >
    {children}
  </a>
);

CircleBadge.defaultProps = {
  className: ''
};

CircleBadge.propTypes = {
  size: string.isRequired,
  className: string,
  children: node.isRequired
};

export default CircleBadge;
