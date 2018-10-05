import React from 'react';
import Breadcrumb from './Breadcrumb';

const items = [
  { href: '/business', text: 'Business' },
  { href: '/business/customer', text: 'Customers' },
  { href: '', text: 'MailChimp' },
];

const breadcrumb = (
  <Breadcrumb items={items} selectedIndex={2} />
);

export {
  breadcrumb,
};
