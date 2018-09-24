import '../index.scss';
import React from 'react';
import {string, node, oneOf} from 'prop-types';

const Button = ({type, className, children}) => {
  if (type === 'button') {
    return <button className={`btn ${className}`} type="button">{children}</button>
  } else {
    return <a className={`btn ${className}`} href="#url" role="button">{children}</a>
  }
};

Button.defaultProps = {
  className: ''
};

Button.propTypes = {
  type: oneOf(['button', 'link']).isRequired,
  className: string,
  children: node.isRequired
};


export default Button;
