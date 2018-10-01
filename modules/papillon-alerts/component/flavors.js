import React from 'react';
import FlashAlert from './FlashAlert';
import FlashMessages from './FlashMessages';

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

export {
  flashAlertDefault,
  multipleParagraphs,
  flashMessages,
  flashWarn,
  flashError
};
