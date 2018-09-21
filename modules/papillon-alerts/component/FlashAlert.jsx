import '../index.scss';
import React from 'react';
import {string, node} from 'prop-types';

const FlashAlert = ({className, children}) => (
  <div class={`flash ${className}`}>
    {children}
  </div>
);

FlashAlert.defaultProps = {
  className: ''
};

FlashAlert.propTypes = {
  className: string.isRequired,
  children: node.isRequired
};

export default FlashAlert;
