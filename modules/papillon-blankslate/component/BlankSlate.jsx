import '../index.scss';
import React from 'react';
import {string, node, arrayOf} from 'prop-types';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'

const BlankSlate = ({className, children, icons}) => (
  <div className={`blankslate ${className}`}>
    {icons && icons.map((icon) => (
      <span className="blankslate-icon">
        <Octicon size='small' icon={getIconByName(icon)} />
      </span>
    ))}
    {children}
  </div>
);

BlankSlate.defaultProps = {
  className: '',
  icons: []
};

BlankSlate.propTypes = {
  className: string,
  children: node.isRequired,
  icons: arrayOf(string)
};

export default BlankSlate;