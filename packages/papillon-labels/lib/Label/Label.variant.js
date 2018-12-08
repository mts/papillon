import React from 'react'
import { node } from 'prop-types'
import Label from './Label'

const variants = [
  'label',
  'state',
  'counter',
  'regular-white-on-blue',
  'regular-white-on-dark-gray',
  'regular-white-on-green',
  'regular-white-on-red',
  'regular-white-on-yellow',
  'regular-white-on-purple',
  'theme-gray',
  'theme-dark-gray',
  'theme-dark-gray',
  'theme-orange',
  'theme-outline',
  'theme-outline-green',
  'state-default',
  'state-green',
  'state-purple',
  'state-red',
  'state-default-small',
  'state-green-small',
  'state-purple-small',
  'state-red-small',
  'state-open',
  'state-closed',
  'state-merged',
  'counter-default',
  'counter-gray',
  'counter-gray-light',
]

const RegularWhiteOnBlue = ({ children }) => <Label variant="label" className="text-white bg-blue">{children}</Label>
RegularWhiteOnBlue.propTypes = { children: node.isRequired }

export {
  variants,
  RegularWhiteOnBlue
}
