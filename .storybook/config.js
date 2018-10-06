import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { setOptions } from '@storybook/addon-options';
// import '../packages/papillon/index.scss';
import { version } from '../packages/papillon/package.json';

setOptions({
  name: `Papillon v${version}`,
  url: 'https://github.com/mts/papillon',
  showAddonPanel: true,
  addonPanelInRight: false
});

addDecorator(story => (
  <div className='p-4'>
    {story()}
  </div>
));

const contexts = [
  require.context('../packages', true, /story.*\.js$/),
];

configure(() => {
  contexts.forEach(context => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context)
  })
}, module);
