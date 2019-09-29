import React from 'react'
import { propTypes, defaultProps } from './AvatarParentChild.props'
import '@primer/css/avatars/index.scss'
import '@primer/css/core/index.scss'

export const AvatarParentChild = ({ className, children }) => <div className={`avatar-parent-child ${className}`.trim()}>{children}</div>

AvatarParentChild.propTypes = propTypes

AvatarParentChild.defaultProps = defaultProps
