import React from 'react';
import { storiesOf } from '@storybook/react';
import FlashAlert from './FlashAlert';
import FlashMessages from './FlashMessages';
import Octicon, {getIconByName} from '@githubprimer/octicons-react'

storiesOf('Flash alerts', module)
  .add('Default', () => (
  <div className='p-4'>
    <FlashAlert>
      Flash message goes here.
    </FlashAlert>
  </div>
  ))
  .add('Multiple paragraphs', () => (
  <div className='p-4'>
    <FlashAlert>
      <p>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</p>
      <p>And this is another paragraph.</p>
    </FlashAlert>
  </div>
  ))
  .add('Flash messages', () => (
  <div className='p-4'>
    <FlashMessages>
      <FlashAlert>
        Flash message goes here.
      </FlashAlert>
    </FlashMessages>
  </div>
  ))
  .add('flash-warn', () => (
  <div className='p-4'>
    <FlashAlert className="flash-warn">
      Flash message goes here.
    </FlashAlert>
  </div>
  ))
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
            class="flash-close js-flash-close"
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
        <button type="submit" class="btn btn-sm primary flash-action">Complete action</button>
        Flash message with action here.
      </FlashAlert>
    </div>
  ))
  .add('full-width-flash', () => (
    <div className='p-4'>
        <div class="container-lg">
          <FlashAlert className="flash-full">
            Full width flash message.
          </FlashAlert>
        </div>
    </div>
  ))
;
