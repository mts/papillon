import React from 'react';
import {string, shape, node} from 'prop-types';

const isEmptyObject = (obj) => {
  return Object.keys(obj).length === 0 && obj.constructor === Object;
}

const MenuItem = ({className, aria, href, children}) => {
  if (isEmptyObject(aria)) {
    return (
      <a className="menu-item" href={href}>{children}</a>
    );
  } else {
    return (
      <a className={`menu-item ${className}`} href={href} aria-current={aria.current}>{children}</a>
    );
  }
};

MenuItem.defaultProps = {
  className: '',
  aria: {}
};

MenuItem.propTypes = {
  className: string,
  aria: shape({
    label: string,
    current: string
  }),
  href: string.isRequired,
  children: node.isRequired
};

export default MenuItem;
