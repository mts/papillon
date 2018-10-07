import React from 'react';
import { string, node } from 'prop-types';
import 'primer-avatars/index.scss';

const AvatarParentChild = ({ className, children }) => (
  <div className={`avatar-parent-child ${className}`.trim()}>
    {children}
  </div>
);

AvatarParentChild.defaultProps = {
  className: '',
};

AvatarParentChild.propTypes = {
  className: string,
  children: node.isRequired,
};

export default AvatarParentChild;
