import React from 'react';
import Menu from './Menu';
import { action } from '@storybook/addon-actions';

const menu = (() => {
  const aria = {
    label: 'Person settings',
    current: 'page',
  };

  const items = [
    { href: '#url', text: 'Account' },
    { href: '#url', text: 'Profile' },
    { href: '#url', text: 'Emails' },
    { href: '#url', text: 'Notifications' },
  ];

  return (
    <Menu
      aria={aria}
      items={items}
      selectedIndex={0}
    />
  )
})();

export {
  menu,
};
