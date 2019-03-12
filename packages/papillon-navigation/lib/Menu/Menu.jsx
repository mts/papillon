import React from 'react'
import { generate } from 'shortid'
import { arrayOf, shape, string, number, node } from 'prop-types'
import MenuItem from '../MenuItem'
import { isEmptyObject } from '../utility'
import '@primer/css/navigation/index.scss'
import '@primer/css/core/index.scss'

const Menu = ({ aria, heading, items, selectedIndex }) => {
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

Menu.defaultProps = {
  heading: {},
}

Menu.propTypes = {
  aria: shape({
    label: string,
    current: string,
  }).isRequired,
  heading: shape({
    text: string,
  }),
  items: arrayOf(
    shape({
      href: string,
      text: string,
      icon: string,
      html: node,
    }),
  ).isRequired,
  selectedIndex: number.isRequired,
}

export default Menu
