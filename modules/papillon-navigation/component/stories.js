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
  .add('Menu with octicons, avatars and counters', () => {
    const aria = {
      label: 'Person settings',
      current: 'page',
    };

    const items = [
      { href: '#url',
        text: 'Account',
        icon: 'tools'
      },
      { href: '#url',
        text: 'Profile',
        icon: 'person'
      },
      { href: '#url',
        text: 'Emails',
        icon: 'mail'
      },
      {
        href: '#url',
        text: 'Notifications',
        icon: 'radio-tower',
        html: <span class="Counter">3</span>
      },
    ];

    return (
      <Menu
        aria={aria}
        items={items}
        selectedIndex={0}
      />
    )
  })
  .add('Menu with heading', () => {
    const aria = {
      label: 'Person settings',
      current: 'page',
      labelledby: 'menu-heading',
    };

    const heading = {
      title: 'Menu heading'
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
        heading={heading}
        items={items}
        selectedIndex={0}
      />
    )
  })
;
