import React from 'react';
import { node } from 'prop-types';
import 'primer/index.scss';

const FlashMessages = ({ children }) => (
  <div className="flash-messages">
    {children}
  </div>
);

FlashMessages.propTypes = {
  children: node.isRequired,
};

export default FlashMessages;
