import React from 'react';
import { string, node } from 'prop-types';
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import 'primer-alerts/index.scss';

const FlashAlert = ({ className, children, icon }) => (
  <div className={`flash ${className}`.trim()}>
    {icon ? <span className="mr-3"><Octicon size='small' icon={getIconByName(icon)} /></span> : null}
    {children}
  </div>
);

FlashAlert.defaultProps = {
  className: '',
  icon: '',
};

FlashAlert.propTypes = {
  className: string,
  children: node.isRequired,
  icon: string,
};

export default FlashAlert;
