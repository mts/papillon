import React from 'react'
import { storiesOf } from '@storybook/react'
import { version } from '../lerna.json'

storiesOf('Papillon', module).add(`v${version} 🎉`, () => <h1>Welcome to {`Papillon v${version}`}</h1>)
