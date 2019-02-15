import React from 'react'
import ReactDOM from 'react-dom'
// import Breadcrumb from 'papillon-breadcrumb'
import Breadcrumb from '../../build/papillon-breadcrumb'

const items = [{ href: '/business', text: 'Business' }, { href: '/business/customer', text: 'Customers' }, { href: '', text: 'MailChimp' }]

ReactDOM.render(
  <div>
    <h3 className="pl-4">Default</h3>
    <div className="p-4">
      <Breadcrumb items={items} selectedIndex={2} />
    </div>
  </div>,
  document.getElementById('app'),
)

module.hot.accept()
