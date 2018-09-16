// Label stories for Storybook

import React from 'react';
import { storiesOf } from '@storybook/react';
import Label from './Label';

storiesOf('Label', module)
  .add('black - tiny', () => (
    <Label color="black" size="tiny" text="some label" />
  ))
  .add('black - small', () => (
    <Label color="black" size="small" text="some label" />
  ))
  .add('black - medium', () => (
    <Label color="black" size="medium" text="some label" />
  ))
  .add('black - large', () => (
    <Label color="black" size="large" text="some label" />
  ))

  .add('blue - tiny', () => (
    <Label color="blue" size="tiny" text="some label" />
  ))
  .add('blue - small', () => (
    <Label color="blue" size="small" text="some label" />
  ))
  .add('blue - medium', () => (
    <Label color="blue" size="medium" text="some label" />
  ))
  .add('blue - large', () => (
    <Label color="blue" size="large" text="some label" />
  ))

  .add('grey - tiny', () => (
    <Label color="grey" size="tiny" text="some label" />
  ))
  .add('grey - small', () => (
    <Label color="grey" size="small" text="some label" />
  ))
  .add('grey - medium', () => (
    <Label color="grey" size="medium" text="some label" />
  ))
  .add('grey - large', () => (
    <Label color="grey" size="large" text="some label" />
  ));
