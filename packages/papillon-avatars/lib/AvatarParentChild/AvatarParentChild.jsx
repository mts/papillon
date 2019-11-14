import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './AvatarParentChild.props'
import '@primer/css/avatars/index.scss'
import '@primer/css/core/index.scss'

export const AvatarParentChild = ({ className, children }) => <div className={cx(className, 'avatar-parent-child')}>{children}</div>

AvatarParentChild.propTypes = propTypes

AvatarParentChild.defaultProps = defaultProps
