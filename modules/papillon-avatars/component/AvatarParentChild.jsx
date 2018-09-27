import React from 'react';
import {string, node} from 'prop-types';

const AvatarParentChild = ({className, children}) => (
  <div className={`avatar-parent-child ${className}`}>
    {children}
  </div>
);

AvatarParentChild.defaultProps = {
  className: ''
};

AvatarParentChild.propTypes = {
  className: string,
  children: node.isRequired
};

export default AvatarParentChild;
