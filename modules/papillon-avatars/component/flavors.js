import React from 'react';
import Avatar from './Avatar';
import { action } from '@storybook/addon-actions';

const srcAvatar = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";

const avatar = (
  <Avatar alt="basic" src={srcAvatar} width={72} height={72} />
);

export {
  avatar
};
