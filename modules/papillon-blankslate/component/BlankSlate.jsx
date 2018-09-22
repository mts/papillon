import '../index.scss';
import React from 'react';
import {string, node} from 'prop-types';

const BlankSlate = ({className, children, icon}) => (
  <div className={`blankslate ${className}`}>
    {children}
  </div>
);

BlankSlate.defaultProps = {
  className: '',
  icon: ''
};

BlankSlate.propTypes = {
  className: string,
  children: node.isRequired,
  icon: string
};

export default BlankSlate;
