import React from 'react'
import cx from 'classnames'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import { propTypes, defaultProps } from './CircleBadgeIcon.props'
import '@primer/css/avatars/index.scss'
import '@primer/css/core/index.scss'

export const CircleBadgeIcon = ({ className, icon }) => (
  <Octicon icon={getIconByName(icon)} scale={1} className={cx(className, 'CircleBadge-icon')} />
)

CircleBadgeIcon.propTypes = propTypes

CircleBadgeIcon.defaultProps = defaultProps
