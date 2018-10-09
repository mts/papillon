import React from 'react';
import { generate } from 'shortid';
import { arrayOf, shape, string, number, node } from 'prop-types';
import UnderlineNavItem from '../UnderlineNavItem';
import 'primer/index.scss';

const UnderlineNav = ({ className, aria, items, action, selectedIndex }) => {
  const { label } = aria;

  return (
    <nav className={`UnderlineNav ${className}`.trim()} aria-label={label}>
      {className.includes('UnderlineNav--right') && action ? action : null}
      <div className="UnderlineNav-body">
      {items.map((item, index) => {
        const { href, role, title, text, icon, counter } = item;

        if (index !== selectedIndex) {
          return (
            <UnderlineNavItem
              key={generate()}
              href={href}
              role={role}
              title={title}
              icon={icon}
              counter={counter}
            >
              {text}
            </UnderlineNavItem>
          )
        }

        return (
          <UnderlineNavItem
            key={generate()}
            href={href}
            role={role}
            title={title}
            icon={icon}
            counter={counter}
            className="selected"
          >
            {text}
          </UnderlineNavItem>
        )
      })}
      </div>
      {!className.includes('UnderlineNav--right') && action ? action : null}
    </nav>
  );
};

UnderlineNav.defaultProps = {
  aria: {
    label: '',
  },
  className: '',
  action: React.ReactNode,
};

UnderlineNav.propTypes = {
  aria: shape({
    label: string,
  }),
  className: string,
  items: arrayOf(shape({
    href: string,
    role: string,
    title: string,
    text: string,
    icon: string,
  })).isRequired,
  action: node,
  selectedIndex: number.isRequired,
};

export default UnderlineNav;

