import React from 'react'
import { string, node } from 'prop-types'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'

// mts ~ UnderlineNav-octicon does not apply in example
// modules/primer-navigation/README.md
// ```html title="UnderlineNav with Counter"

const UnderlineNavItem = ({ className, href, role, title, icon, counter, children }) => (
    <a
      href={href}
      role={role}
      title={title}
      className={`UnderlineNav-item ${className}`.trim()}
    >
      {icon ? <Octicon className='UnderlineNav-octicon mr-1' size='small' icon={getIconByName(icon)} /> : null}
      {children}
      {counter ? <span className='ml-1'>{counter}</span> : null}
    </a>
  )

UnderlineNavItem.defaultProps = {
  className: '',
  icon: '',
  counter: React.ReactNode,
}

UnderlineNavItem.propTypes = {
  className: string,
  href: string.isRequired,
  role: string.isRequired,
  title: string.isRequired,
  icon: string,
  counter: node,
  children: node.isRequired,
}

export default UnderlineNavItem
