import React from 'react'
import { generate } from 'shortid'
import { propTypes, defaultProps } from './UnderlineNav.props'
import { UnderlineNavItem } from '../UnderlineNavItem'
import '@primer/css/navigation/index.scss'
import '@primer/css/core/index.scss'

export const UnderlineNav = ({ className, aria, items, action, selectedIndex }) => {
  const { label } = aria

  return (
    <nav className={`UnderlineNav ${className}`.trim()} aria-label={label}>
      {className.includes('UnderlineNav--right') && action ? action : null}
      <div className="UnderlineNav-body">
        {items.map((item, index) => {
          const { href, role, title, text, icon, counter } = item

          if (index !== selectedIndex) {
            return (
              <UnderlineNavItem key={generate()} href={href} role={role} title={title} icon={icon} counter={counter}>
                {text}
              </UnderlineNavItem>
            )
          }

          return (
            <UnderlineNavItem key={generate()} href={href} role={role} title={title} icon={icon} counter={counter} className="selected">
              {text}
            </UnderlineNavItem>
          )
        })}
      </div>
      {!className.includes('UnderlineNav--right') && action ? action : null}
    </nav>
  )
}

UnderlineNav.propTypes = propTypes

UnderlineNav.defaultProps = defaultProps
