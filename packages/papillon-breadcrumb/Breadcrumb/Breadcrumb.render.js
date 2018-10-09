import React from 'react';

const Breadcrumb = process.env.NODE_ENV === 'develop'
  ? require('./Breadcrumb').default
  : require('../lib/papillon-breadcrumb').default;

const items = [
  { href: '/business', text: 'Business' },
  { href: '/business/customer', text: 'Customers' },
  { href: '', text: 'MailChimp' },
];

const breadcrumb = (
  <Breadcrumb items={items} selectedIndex={2} />
);

export default breadcrumb;
