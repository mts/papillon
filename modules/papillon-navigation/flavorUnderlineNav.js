import React from 'react';
import Menu from './Menu';
import UnderlineNav from './UnderlineNav';
import { action } from '@storybook/addon-actions';

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

// const action = <div className="UnderlineNav-actions"><a className="btn">Button</a></div>;

const underlineNav = (
  <UnderlineNav
    items={items}
    selectedIndex={0}
  />
);

export {
  underlineNav,
};
