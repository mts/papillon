import React from 'react';
import { storiesOf } from '@storybook/react';
import FlashAlert from './FlashAlert';
import FlashMessages from './FlashMessages';
import Octicon, {getIconByName} from '@githubprimer/octicons-react';

import {
  flashAlertDefault,
  multipleParagraphs,
  flashMessages,
  flashWarn
} from './flavors';

storiesOf('Flash alerts', module)
  .add('Default', () => flashAlertDefault)
  .add('Multiple paragraphs', () => multipleParagraphs)
  .add('Flash messages', () => flashMessages)
  .add('flash-warn', () => flashWarn)
  .add('flash-error', () => (
  <div className='p-4'>
    <FlashAlert className="flash-error">
      Flash message goes here.
    </FlashAlert>
  </div>
  ))
  .add('flash-success', () => (
  <div className='p-4'>
    <FlashAlert className="flash-success">
      Flash message goes here.
    </FlashAlert>
  </div>
  ))
  .add('flash-icon', () => (
    <div className='p-4'>
      <FlashAlert icon="alert">
        Flash message with an icon goes here.
      </FlashAlert>
    </div>
  ))
  .add('with-dismiss', () => (
    // mts ~ js-flash-close does not exist
    <div className='p-4'>
      <FlashAlert>
          <button
            className="flash-close js-flash-close"
            type="button"
          >
            <Octicon size='small' icon={getIconByName('x')} />
          </button>
          Dismissable flash message goes here.
      </FlashAlert>
    </div>
  ))
  .add('with-action-button', () => (
    <div className='p-4'>
      <FlashAlert>
        <button type="submit" className="btn btn-sm primary flash-action">Complete action</button>
        Flash message with action here.
      </FlashAlert>
    </div>
  ))
  .add('full-width-flash', () => (
    <div className='p-4'>
        <div className="container-lg">
          <FlashAlert className="flash-full">
            Full width flash message.
          </FlashAlert>
        </div>
    </div>
  ))
;
