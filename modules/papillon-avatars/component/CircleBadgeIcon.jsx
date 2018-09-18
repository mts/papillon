import '../index.scss';
import React from 'react';
import {string, number} from 'prop-types';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'

const CircleBadgeIcon = ({className, icon}) =>
  <Octicon icon={getIconByName(icon)} scale={1} className={className} />;

CircleBadgeIcon.propTypes = {
  className: string.isRequired,
  icon: string.isRequired
};

export default CircleBadgeIcon;
