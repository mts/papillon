import React from 'react'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import { propTypes, defaultProps } from './UnderlineNavItem.props'

// mts ~ UnderlineNav-octicon does not apply in example
// modules/primer-navigation/README.md
// ```html title="UnderlineNav with Counter"

export const UnderlineNavItem = ({ className, href, role, title, icon, counter, children }) => (
  <a href={href} role={role} title={title} className={`UnderlineNav-item ${className}`.trim()}>
    {icon ? <Octicon className="UnderlineNav-octicon mr-1" size="small" icon={getIconByName(icon)} /> : null}
    {children}
    {counter ? <span className="ml-1">{counter}</span> : null}
  </a>
)

UnderlineNavItem.propTypes = propTypes

UnderlineNavItem.defaultProps = defaultProps
