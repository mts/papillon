import React from 'react';
import { storiesOf } from '@storybook/react';
import UnderlineNav from './UnderlineNav';

const aria = {
  label: 'Foo bar'
};

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

const counter = <span className="Counter">10</span>;

const itemsWithIcons = [
  { href: '#url',
    role: 'tab',
    title: 'Item 1',
    text: 'Item 1',
    icon: 'tools'
  },
  { href: '#url',
    role: 'tab',
    title: 'Item 2',
    text: 'Item 2',
    icon: 'tools',
    counter
  },
  { href: '#url',
    role: 'tab',
    title: 'Item 3',
    text: 'Item 3',
    icon: 'tools'
  },
  { href: '#url',
    role: 'tab',
    title: 'Item 4',
    text: 'Item 4',
    icon: 'tools'
  }
];

const action = <div className="UnderlineNav-actions"><a className="btn">Button</a></div>;

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
        aria={aria}
        items={items}
        action={action}
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
  .add('UnderlineNav--right with actions', () => {
    return (
      <UnderlineNav
        aria={aria}
        className="UnderlineNav--right"
        items={items}
        action={action}
        selectedIndex={0}
      />
    )
  })
  .add('UnderlineNav with Counter', () => {
    return (
      <UnderlineNav
        aria={aria}
        items={itemsWithIcons}
        selectedIndex={0}
      />
    )
  })
;
