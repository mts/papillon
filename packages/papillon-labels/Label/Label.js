import React from 'react';
import { string, oneOf, node } from 'prop-types';
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import cx from 'classnames';
import 'primer/index.scss';

const Label = ({ type, className, children, icon }) => (
  <span
    className={cx({
      'Label': type === 'label',
      'State': type === 'state',
      'Counter': type === 'counter',
    }, className)}
  >
    {icon ? <Octicon size='small' icon={getIconByName(icon)} /> : null} {children}
  </span>
);

Label.defaultProps = {
  className: '',
  icon: '',
};

Label.propTypes = {
  type: oneOf(['label', 'state', 'counter']).isRequired,
  className: string,
  children: node.isRequired,
  icon: string,
};

export default Label;
