import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';
import MenuItem from './MenuItem';
import {isEmptyObject} from './utility';

const Menu = ({className, aria, heading, items, selectedIndex}) => {
  const {label, current, labelledby} = aria;
  const {title} = heading;

  return (
    <nav className="menu" aria-label={label} aria-labelledby={labelledby}>
      {!isEmptyObject(heading) && (
        <span className="menu-heading" id="menu-heading">{title}</span>
      )}
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
  className: '',
  heading: {}
};

Menu.propTypes = {
  className: string,
  aria: shape({
    label: string,
    current: string
  }).isRequired,
  heading: shape({
    text: string
  }),
  items: arrayOf(shape({
    href: string,
    text: string,
    icon: string,
    html: string
  })).isRequired,
  selectedIndex: number.isRequired
};

export default Menu;

