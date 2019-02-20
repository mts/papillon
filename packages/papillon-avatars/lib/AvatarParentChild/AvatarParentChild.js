import React from 'react'
import { string, node } from 'prop-types'
import '@primer/css/avatars/index.scss'
import '@primer/css/utilities/index.scss'

const AvatarParentChild = ({ className, children }) => <div className={`avatar-parent-child ${className}`.trim()}>{children}</div>

AvatarParentChild.defaultProps = {
  className: '',
}

AvatarParentChild.propTypes = {
  className: string,
  children: node.isRequired,
}

export default AvatarParentChild
