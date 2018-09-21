import '../index.scss';
import React from 'react';
import {string, oneOf} from 'prop-types';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'
import cx from 'classnames';

const Label = ({type, className, text, icon}) => (
  <span
    className={cx({
      'Label': type === 'label',
      'State': type === 'state',
      'Counter': type === 'counter'
    }, className)}
  >
    {icon ? <Octicon size='small' icon={getIconByName(icon)} /> : null} {text}
  </span>
);

Label.propTypes = {
  type: oneOf(['label', 'state', 'counter']).isRequired,
  className: string.isRequired,
  text: string.isRequired,
  icon: string
};

export default Label;
