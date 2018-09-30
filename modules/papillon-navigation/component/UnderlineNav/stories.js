import React from 'react';
import { storiesOf } from '@storybook/react';
import UnderlineNav from './UnderlineNav';

const items = [
  { href: '#url',
    role: 'tab',
    title: 'Item 1',
    text: 'Item 1'
  },
  { href: '#url',
    role: 'tab',
    title: 'Item 2',
    text: 'Item 2'
  },
  { href: '#url',
    role: 'tab',
    title: 'Item 3',
    text: 'Item 3'
  },
  { href: '#url',
    role: 'tab',
    title: 'Item 4',
    text: 'Item 4'
  }
];

const html =  <div class="UnderlineNav-actions"><a class="btn">Button</a></div>;

storiesOf('Navigation', module)
  .add('UnderlineNav', () => {
    return (
      <UnderlineNav
        items={items}
        selectedIndex={0}
      />
    )
  })
  .add('UnderlineNav-actions', () => {
    return (
      <UnderlineNav
        items={items}
        html={html}
        selectedIndex={0}
      />
    )
  })
  .add('UnderlineNav--right', () => {
    return (
      <UnderlineNav
        className="UnderlineNav--right"
        items={items}
        selectedIndex={0}
      />
    )
  })
;
