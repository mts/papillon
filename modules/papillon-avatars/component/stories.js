import React from 'react';
import { storiesOf } from '@storybook/react';
import Avatar from './Avatar';

const srcBasic = "https://user-images.githubusercontent.com/334891/29999089-2837c968-9009-11e7-92c1-6a7540a594d5.png";

storiesOf('Avatar', module)
  .add('avatar', () => (
    <Avatar className="avatar" alt="basic" src={srcBasic} width={72} height={72} />
  ))
  .add('avatar-small', () => (
    <Avatar className="avatar avatar-small" alt="small" src={srcBasic} width={32} height={32} />
  ))
  .add('avatar-parent-child', () => (
    <div class="avatar-parent-child float-left">
      <Avatar className="avatar" alt="parent" src={srcBasic} width={48} height={48} />
      <Avatar className="avatar avatar-child" alt="child" src={srcBasic} width={20} height={20} />
    </div>
  ))
;
