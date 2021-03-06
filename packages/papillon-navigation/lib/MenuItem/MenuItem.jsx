import React from 'react'
import cx from 'classnames'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import { propTypes, defaultProps } from './MenuItem.props'
import { isEmptyObject } from '../library'

export const MenuItem = ({ className, aria, href, icon, children }) => {
  if (isEmptyObject(aria)) {
    return (
      <a className="menu-item" href={href}>
        {icon ? <Octicon size="small" icon={getIconByName(icon)} /> : null}
        <span className={cx({ 'ml-1': icon !== '' })}>{children}</span>
      </a>
    )
  }

  return (
    <a className={cx(className, 'menu-item')} href={href} aria-current={aria.current}>
      {icon ? <Octicon size="small" icon={getIconByName(icon)} /> : null}
      <span className={cx({ 'ml-1': icon !== '' })}>{children}</span>
    </a>
  )
}

MenuItem.propTypes = propTypes

MenuItem.defaultProps = defaultProps
