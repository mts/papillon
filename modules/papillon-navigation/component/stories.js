import React from 'react';
import { storiesOf } from '@storybook/react';
import Menu from './Menu';

storiesOf('Navigation', module)
  .add('Menu', () => {
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
  })
;
