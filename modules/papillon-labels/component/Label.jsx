import '../index.scss';
import React from 'react';
import {string} from 'prop-types';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'

const Label = ({className, text, icon}) => (
  <span className={className}>
    {icon ? <Octicon size='small' icon={getIconByName(icon)} /> : null} {text}
  </span>
);

Label.propTypes = {
  className: string.isRequired,
  text: string.isRequired,
  icon: string
};

export default Label;
