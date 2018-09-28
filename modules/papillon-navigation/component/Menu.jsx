import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';
import MenuItem from './MenuItem';

const Menu = ({className, aria, items, selectedIndex}) => {
  const {label, current} = aria;

  return (
    <nav className="menu" aria-label={label}>
      {items.map((item, index) => {
        const {href, text, icon, html} = item;

        if (index !== selectedIndex) {
          return (
            <MenuItem key={index} href={href} icon={icon}>
              {html ? html: null}
              {text}
            </MenuItem>
          )
        } else {
          return (
            <MenuItem key={index} className="selected" aria={aria} href={href} icon={icon}>
              {html ? html: null}
              {text}
            </MenuItem>
          )
        }
      })}
    </nav>
  );
};

Menu.defaultProps = {
  className: ''
};

Menu.propTypes = {
  className: string,
  aria: shape({
    label: string,
    current: string
  }).isRequired,
  items: arrayOf(shape({
    href: string,
    text: string
  })).isRequired,
  selectedIndex: number.isRequired
};

export default Menu;

