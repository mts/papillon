import React from 'react';
import { storiesOf } from '@storybook/react';
import UnderlineNav from './UnderlineNav';

storiesOf('Navigation', module)
  .add('UnderlineNav', () => {
    const items = [
      { href: '#url', role: 'tab', title: 'Item 1', text: 'Item 1' },
      { href: '#url', role: 'tab', title: 'Item 2', text: 'Item 2' },
      { href: '#url', role: 'tab', title: 'Item 3', text: 'Item 3' },
      { href: '#url', role: 'tab', title: 'Item 4', text: 'Item 4' }
    ];

    return (
      <UnderlineNav
        items={items}
        selectedIndex={0}
      />
    )
  })
;
