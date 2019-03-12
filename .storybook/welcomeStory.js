import React from 'react'
import { storiesOf } from '@storybook/react'
import { version } from '../lerna.json'

storiesOf('Welcome', module).add(`to Papillon v${version} 🎉`, () => <h1>Welcome to {`Papillon v${version}`}</h1>)
