import React from 'react'
import { string } from 'prop-types'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import '@primer/css/avatars/index.scss'

const CircleBadgeIcon = ({ className, icon }) => (
  <Octicon icon={getIconByName(icon)} scale={1} className={`CircleBadge-icon ${className}`.trim()} />
)

CircleBadgeIcon.defaultProps = {
  className: '',
}

CircleBadgeIcon.propTypes = {
  className: string,
  icon: string.isRequired,
}

export default CircleBadgeIcon
