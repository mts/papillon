import React from 'react';
import Breadcrumb from './Breadcrumb';
import { action } from '@storybook/addon-actions';

const items = [
  {href: '/business', text: 'Business'},
  {href: '/business/customer', text: 'Customers'},
  {href: '', text: 'MailChimp'}
];

const breadcrumb = (
  <Breadcrumb items={items} selectedIndex={2} />
);

export {
  breadcrumb
};
