import '../index.scss';
import React from 'react';
import {string} from 'prop-types';

const Label = ({className, text}) => (
  <span className={className}>{text}</span>
);

Label.propTypes = {
  className: string.isRequired,
  text: string.isRequired
};

export default Label;
