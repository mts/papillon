import React from 'react'

const Menu =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Menu').Menu
    : require('../../../build/papillon-navigation').Menu

export const menu = (() => {
  const aria = {
    label: 'Person settings',
    current: 'page',
  }

  const items = [
    { href: '#url', text: 'Account' },
    { href: '#url', text: 'Profile' },
    { href: '#url', text: 'Emails' },
    { href: '#url', text: 'Notifications' },
  ]

  return <Menu aria={aria} items={items} selectedIndex={0} />
})()

export const menuWithIconAvatarCounter = (() => {
  const aria = {
    label: 'Person settings',
    current: 'page',
  }

  const items = [
    { href: '#url', text: 'Account', icon: 'tools' },
    { href: '#url', text: 'Profile', icon: 'person' },
    { href: '#url', text: 'Emails', icon: 'mail' },
    {
      href: '#url',
      text: 'Notifications',
      icon: 'radio-tower',
      html: <span className="Counter">3</span>,
    },
  ]

  return <Menu aria={aria} items={items} selectedIndex={0} />
})()

export const menuWithHeading = (() => {
  const aria = {
    label: 'Person settings',
    current: 'page',
    labelledby: 'menu-heading',
  }

  const heading = {
    title: 'Menu heading',
  }

  const items = [
    { href: '#url', text: 'Account' },
    { href: '#url', text: 'Profile' },
    { href: '#url', text: 'Emails' },
    { href: '#url', text: 'Notifications' },
  ]

  return <Menu aria={aria} heading={heading} items={items} selectedIndex={0} />
})()
