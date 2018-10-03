import React from 'react';
import {string, node, arrayOf} from 'prop-types';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'

const Blankslate = ({className, children, icons}) => (
  <div className={`blankslate ${className}`.trim()}>
    {icons && icons.map((icon, index) => (
      <span key={index} className="blankslate-icon">
        <Octicon size='small' icon={getIconByName(icon)} />
      </span>
    ))}
    {children}
  </div>
);

Blankslate.defaultProps = {
  className: '',
  icons: []
};

Blankslate.propTypes = {
  className: string,
  children: node.isRequired,
  icons: arrayOf(string)
};

export default Blankslate;
