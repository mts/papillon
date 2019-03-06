import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react';
import { withInfo } from '@storybook/addon-info'
import { withNotes } from '@storybook/addon-notes'
// import '../packages/papillon/index.scss';
import { version } from '../lerna.json';

const setup = () => {
  addDecorator(withInfo);
  addDecorator(withNotes);
  addParameters({
    options: {
      brandTitle: `Papillon v${version}`,
      brandUrl: 'https://github.com/mts/papillon',
      showNav: true,
      showPanel: false,
      sidebarAnimations: false
    }
  })

  addDecorator(story => (
    <div className='p-4'>
      {story()}
    </div>
  ));

  const contexts = [require.context('../packages', true, /story*\.js$/)];

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

