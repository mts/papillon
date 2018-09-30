import React from 'react';
import {string, node} from 'prop-types';

const UnderlineNavItem = ({className, href, role, title, children}) => {
  return (
    <a href={href} role={role} title={title} className={`UnderlineNav-item ${className}`}>{children}</a>
  )
};

UnderlineNavItem.defaultProps = {
  className: ''
};

UnderlineNavItem.propTypes = {
  className: string,
  href: string.isRequired,
  role: string.isRequired,
  title: string.isRequired,
  children: node.isRequired
};

export default UnderlineNavItem;
