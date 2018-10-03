import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
import '../modules/papillon/index.scss';
import { version } from '../modules/papillon/package.json';

setOptions({
  name: `Papillon v${version}`,
  url: 'https://github.com/mts/papillon',
  showAddonPanel: true
  // addonPanelInRight: true
});

addDecorator(story => (
  <div className='p-4'>
    {story()}
  </div>
));

const contexts = [
  require.context('../modules', true, /story.*\.js$/),
];

configure(() => {
  contexts.forEach(context => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context)
  })
}, module);
