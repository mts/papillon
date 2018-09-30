import React from 'react';
import {arrayOf, shape, string, number} from 'prop-types';
import UnderlineNavItem from './UnderlineNavItem';

const UnderlineNav = ({className, items, html, selectedIndex}) => {
  return (
    <nav className="UnderlineNav">
      <div className="UnderlineNav-body">
      {items.map((item, index) => {
        const {href, role, title, text} = item;

        if (index !== selectedIndex) {
          return (
            <UnderlineNavItem key={index} href={href} role={role} title={title}>
              {text}
            </UnderlineNavItem>
          )
        } else {
          return (
            <UnderlineNavItem key={index} href={href} role={role} title={title} className="selected">
              {text}
            </UnderlineNavItem>
          )
        }
      })}
      </div>
      {html ? html: null}
    </nav>
  );
};

UnderlineNav.defaultProps = {
  className: '',
  html: '',
};

UnderlineNav.propTypes = {
  className: string,
  items: arrayOf(shape({
    href: string,
    role: string,
    title: string,
    text: string
  })).isRequired,
  html: string,
  selectedIndex: number.isRequired
};

export default UnderlineNav;

