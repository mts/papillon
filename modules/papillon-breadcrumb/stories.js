import React from 'react';
import { storiesOf } from '@storybook/react';
import Breadcrumb from './Breadcrumb';

storiesOf('Breadcrumb', module)
  .add('Breadcrumb', () => {
    const items = [
      {href: '/business', text: 'Business'},
      {href: '/business/customer', text: 'Customers'},
      {href: '', text: 'MailChimp'}
    ];

    return(
      <Breadcrumb items={items} selectedIndex={2} />
    )
  })
;
