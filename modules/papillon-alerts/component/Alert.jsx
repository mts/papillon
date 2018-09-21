import '../index.scss';
import React from 'react';
import {string, oneOf} from 'prop-types';

const Alert = ({className, text}) => (
  <div class={`flash ${className}`}>
    {text}
  </div>
);

Alert.defaultProps = {
  className: ''
};

Alert.propTypes = {
  className: string.isRequired,
  text: string.isRequired
};

export default Alert;
