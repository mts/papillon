import React from 'react';
import {string, node} from 'prop-types';

const FlashMessages = ({children}) => (
  <div className="flash-messages">
    {children}
  </div>
);

FlashMessages.propTypes = {
  children: node.isRequired
};

export default FlashMessages;
