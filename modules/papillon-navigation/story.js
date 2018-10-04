import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  menu,
  menuWithIconAvatarCounter
} from './flavor';
import { withInfo } from '@storybook/addon-info';
import { withNotes } from '@storybook/addon-notes';

import Menu from './Menu';

storiesOf('Navigation', module)
  .add('Menu', withNotes('Must render Menu ~ Menu')
      (withInfo('Menu')(() => menu)))
  .add('Menu with octicons, avatars and counters', withNotes('Must render Menu ~ Menu with octicons, avatars and counters')
      (withInfo('Menu with octicons, avatars and counters')(() => menuWithIconAvatarCounter)))
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
