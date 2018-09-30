import React from 'react';
import { storiesOf } from '@storybook/react';
import UnderlineNav from './UnderlineNav';

storiesOf('Navigation', module)
  .add('UnderlineNav', () => {
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
      <UnderlineNav
        aria={aria}
        items={items}
        selectedIndex={0}
      />
    )
  })
;
