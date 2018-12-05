import React from 'react'
import { configure, addDecorator } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
import { withOptions } from '@storybook/addon-options';
// import '../packages/papillon/index.scss';
import { version } from '../packages/papillon-prime/package.json';

const setup = () => {
  addDecorator(withInfo);
  addDecorator(withNotes);
  addDecorator(
    withOptions({
      name: `Papillon v${version}`,
      url: 'https://github.com/mts/papillon',
      showAddonPanel: true,
      addonPanelInRight: true
    }))

  addDecorator(story => (
    <div className='p-4'>
      {story()}
    </div>
  ));

  const contexts = [require.context('../packages', true, /story.tmp*\.js$/)];

  const loadStories = () => {
    require('./welcomeStory');
    contexts.forEach(context => {
      context.keys()
        .filter(key => !key.includes('node_modules'))
        .forEach(context)
    })
  };

  configure(loadStories, module);
};

setup()

export default setup;

