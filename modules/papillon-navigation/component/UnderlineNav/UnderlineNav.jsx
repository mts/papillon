import React from 'react';
import {arrayOf, shape, string, number, node} from 'prop-types';
import UnderlineNavItem from './UnderlineNavItem';

const UnderlineNav = ({className, aria, items, html, selectedIndex}) => {
  const {label} = aria;

  return (
    <nav className={`UnderlineNav ${className}`.trim()} aria-label={label}>
      {className.includes('UnderlineNav--right') && html ? html : null}
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
      {!className.includes('UnderlineNav--right') && html ? html : null}
    </nav>
  );
};

UnderlineNav.defaultProps = {
  aria: {
    label: ''
  },
  className: '',
  html: React.ReactNode,
};

UnderlineNav.propTypes = {
  aria: shape({
    label: string
  }),
  className: string,
  items: arrayOf(shape({
    href: string,
    role: string,
    title: string,
    text: string
  })).isRequired,
  html: node,
  selectedIndex: number.isRequired
};

export default UnderlineNav;

