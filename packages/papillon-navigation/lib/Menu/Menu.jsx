import React from 'react'
import { generate } from 'shortid'
import { propTypes, defaultProps } from './Menu.props'
import { MenuItem } from '../MenuItem'
import { isEmptyObject } from '../library'
import '@primer/css/navigation/index.scss'
import '@primer/css/core/index.scss'

export const Menu = ({ aria, heading, items, selectedIndex }) => {
  const { label, labelledby } = aria
  const { title } = heading

  return (
    <nav className="menu" aria-label={label} aria-labelledby={labelledby}>
      {!isEmptyObject(heading) && (
        <span className="menu-heading" id="menu-heading">
          {title}
        </span>
      )}
      {items.map((item, index) => {
        const { href, text, icon, html } = item

        if (index !== selectedIndex) {
          return (
            <MenuItem key={generate()} href={href} icon={icon}>
              {html || null}
              {text}
            </MenuItem>
          )
        }

        return (
          <MenuItem key={generate()} className="selected" aria={aria} href={href} icon={icon}>
            {html || null}
            {text}
          </MenuItem>
        )
      })}
    </nav>
  )
}

Menu.propTypes = propTypes

Menu.defaultProps = defaultProps
