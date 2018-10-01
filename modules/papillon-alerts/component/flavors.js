import React from 'react';
import FlashAlert from './FlashAlert';
import FlashMessages from './FlashMessages';
import Octicon, {getIconByName} from '@githubprimer/octicons-react';

const flashAlertDefault = (
  <div className='p-4'>
    <FlashAlert>
      Flash message goes here.
    </FlashAlert>
  </div>
);

const multipleParagraphs = (
  <div className='p-4'>
    <FlashAlert>
      <p>This is a longer flash message in it's own paragraph. It ends up looking something like this. If we keep adding more text, it'll eventually wrap to a new line.</p>
      <p>And this is another paragraph.</p>
    </FlashAlert>
  </div>
);

const flashMessages = (
  <div className='p-4'>
    <FlashMessages>
      <FlashAlert>
        Flash message goes here.
      </FlashAlert>
    </FlashMessages>
  </div>
);

const flashWarn = (
  <div className='p-4'>
    <FlashAlert className="flash-warn">
      Flash message goes here.
    </FlashAlert>
  </div>
);

const flashError = (
  <div className='p-4'>
    <FlashAlert className="flash-error">
      Flash message goes here.
    </FlashAlert>
  </div>
);

const flashSuccess = (
  <div className='p-4'>
    <FlashAlert className="flash-success">
      Flash message goes here.
    </FlashAlert>
  </div>
);

const flashIcon = (
  <div className='p-4'>
    <FlashAlert icon="alert">
      Flash message with an icon goes here.
    </FlashAlert>
  </div>
);

const withDismiss = (
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
);

const withActionButton = (
  <div className='p-4'>
    <FlashAlert>
      <button type="submit" className="btn btn-sm primary flash-action">Complete action</button>
      Flash message with action here.
    </FlashAlert>
  </div>
);

const fullWidthFlash = (
  <div className='p-4'>
      <div className="container-lg">
        <FlashAlert className="flash-full">
          Full width flash message.
        </FlashAlert>
      </div>
  </div>
);

export {
  flashAlertDefault,
  multipleParagraphs,
  flashMessages,
  flashWarn,
  flashError,
  flashSuccess,
  flashIcon,
  withDismiss,
  withActionButton,
  fullWidthFlash
};
