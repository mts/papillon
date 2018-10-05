import React from 'react';
import FlashAlert from '../FlashAlert';
import FlashMessages from './FlashMessages';

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
