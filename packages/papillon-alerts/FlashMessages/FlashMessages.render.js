import React from 'react';
import Octicon, { getIconByName } from '@githubprimer/octicons-react';
import { action } from '@storybook/addon-actions';
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

export {
  flashMessages,
};
