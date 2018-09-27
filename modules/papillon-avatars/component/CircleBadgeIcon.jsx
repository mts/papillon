import React from 'react';
import {string, number} from 'prop-types';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'

const CircleBadgeIcon = ({className, icon}) => (
  <Octicon
    icon={getIconByName(icon)}
    scale={1}
    className={`CircleBadge-icon ${className}`}
  />
);

CircleBadgeIcon.defaultProps = {
  className: ''
};

CircleBadgeIcon.propTypes = {
  className: string,
  icon: string.isRequired
};

export default CircleBadgeIcon;
