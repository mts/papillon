import '../index.scss';
import React from 'react';
import {string, node} from 'prop-types';

const AvatarParentChild = ({className, children}) => <div class={className}> {children}</div>;

AvatarParentChild.propTypes = {
  className: string.isRequired,
  children: node.isRequired
};

export default AvatarParentChild;
