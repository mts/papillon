import React from 'react';
import FlashAlert from '../FlashAlert';

const FlashMessages = process.env.NODE_ENV === 'develop'
  ? require('./FlashMessages').default
  : require('../lib/papillon-alerts').FlashMessages;

const flashMessages = (
  <div className='p-4'>
    <FlashMessages>
      <FlashAlert>
        Flash message goes here.
      </FlashAlert>
    </FlashMessages>
  </div>
);

export default flashMessages;
