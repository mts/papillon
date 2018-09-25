import '../index.scss';
import React from 'react';
import {string, node, oneOf} from 'prop-types';

const Button = ({variant, className, children}) => {
  if (variant === 'button') {
    return <button className={`btn ${className}`} type="button">{children}</button>
  } else if (variant === 'link') {
    return <a className={`btn ${className}`} href="#url" role="button">{children}</a>
  } else if (variant === 'button-link') {
    return <button className="btn-link">Button</button>
  }
};

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  variant: oneOf(['button', 'link', 'button-link']).isRequired,
  className: string,
  children: node.isRequired
};


export default Button;
