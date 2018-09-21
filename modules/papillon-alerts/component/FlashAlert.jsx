import '../index.scss';
import React from 'react';
import {string, node} from 'prop-types';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'

const FlashAlert = ({className, children, icon}) => (
  <div className={`flash ${className}`}>
    {icon ? <span className="mr-3"><Octicon size='small' icon={getIconByName(icon)} /></span> : null}
    {children}
  </div>
);

FlashAlert.defaultProps = {
  icon: ''
};

FlashAlert.defaultProps = {
  className: ''
};

FlashAlert.propTypes = {
  className: string.isRequired,
  children: node.isRequired,
  icon: string
};

export default FlashAlert;
