import React from 'react'

const FlashAlert = process.env.NODE_ENV === 'develop'
  ? require('../FlashAlert').default
  : require('../../build/papillon-alerts').FlashAlert

const FlashMessages = process.env.NODE_ENV === 'develop'
  ? require('./FlashMessages').default
  : require('../../build/papillon-alerts').FlashMessages

console.log('~process.env.NODE_ENV~', process.env.NODE_ENV);
console.log('~FlashAlert~', FlashAlert);
console.log('~FlashMessages~', FlashMessages);

const flashMessages = (
  <div className='p-4'>
    <FlashMessages>
      <FlashAlert>
        Flash message goes here.
      </FlashAlert>
    </FlashMessages>
  </div>
)

export default flashMessages
