import React from 'react';
import { string, shape, node } from 'prop-types';
import Octicon, { getIconByName } from '@githubprimer/octicons-react';
import cx from 'classnames';
import { isEmptyObject } from '../utility';

const MenuItem = ({ className, aria, href, icon, children }) => {
  if (isEmptyObject(aria)) {
    return (
      <a className="menu-item" href={href}>
        {icon ? <Octicon size='small' icon={getIconByName(icon)} /> : null}
        <span className={cx({ 'ml-1': icon !== '' })}>{children}</span>
      </a>
    );
  }

  return (
    <a className={`menu-item ${className}`.trim()} href={href} aria-current={aria.current}>
      {icon ? <Octicon size='small' icon={getIconByName(icon)} /> : null}
      <span className={cx({ 'ml-1': icon !== '' })}>{children}</span>
    </a>
  );
};

MenuItem.defaultProps = {
  className: '',
  aria: {},
  icon: '',
};

MenuItem.propTypes = {
  className: string,
  aria: shape({
    label: string,
    current: string,
  }),
  href: string.isRequired,
  icon: string,
  children: node.isRequired,
};

export default MenuItem;
