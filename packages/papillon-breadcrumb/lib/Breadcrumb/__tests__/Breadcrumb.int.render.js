import React from 'react'

const Breadcrumb =
  process.env.NODE_ENV === 'develop' || process.env.NODE_ENV === 'test'
    ? require('../Breadcrumb').Breadcrumb
    : require('../../../build/papillon-breadcrumb').Breadcrumb

const items = [
  { href: '/business', text: 'Business' },
  { href: '/business/customer', text: 'Customers' },
  { href: '', text: 'MailChimp' },
]

export const breadcrumb = <Breadcrumb items={items} selectedIndex={2} />
