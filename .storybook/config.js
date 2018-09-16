import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { setOptions } from '@storybook/addon-options'
import '../modules/papillon/index.scss'
import { version } from '../modules/papillon/package.json'

setOptions({
  name: `Papillon v${version}`
})

addDecorator(story => (
  <div className='p-4'>
    {story()}
  </div>
))

const contexts = [
  require.context('../modules', true, /stories.*\.js$/),
]

configure(() => {
  contexts.forEach(context => {
    context.keys()
      .filter(key => !key.includes('node_modules'))
      .forEach(context)
  })
}, module)
