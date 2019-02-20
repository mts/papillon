import React from 'react'
import { string, oneOf, node } from 'prop-types'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import cx from 'classnames'
import '@primer/css/labels/index.scss'
import '@primer/css/utilities/index.scss'
import {
  label,
  state,
  counter,
  labelWhiteOnBlue,
  labelWhiteOnDarkGray,
  labelWhiteOnDarkGreen,
  labelWhiteOnRed,
  labelWhiteOnYellow,
  labelWhiteOnPurple,
  themeGray,
  themeDarkGray,
  themeOrange,
  themeOutline,
  themeOutlineGreen,
  stateDefault,
  stateGreen,
  statePurple,
  stateRed,
  stateDefaultSmall,
  stateGreenSmall,
  statePurpleSmall,
  stateRedSmall,
  stateOpen,
  stateClosed,
  stateMerged,
  counterDefault,
  counterGray,
  counterGrayLight,
  variants,
} from './Label.variant'

const getLabel = (variant, className, children, icon) => (
  <span
    className={cx(
      {
        Label: variant === 'label',
        State: variant === 'state',
        Counter: variant === 'counter',
      },
      className,
    )}
  >
    {icon ? <Octicon size="small" icon={getIconByName(icon)} /> : null} {children}
  </span>
)

const Label = ({ variant, className, children, icon }) => {
  if (variant === label || variant === state || variant === counter) {
    return getLabel(variant, className, children, icon)
  }
  switch (variant) {
    // Label
    case labelWhiteOnBlue:
      return getLabel('label', 'text-white bg-blue', children, icon)
    case labelWhiteOnDarkGray:
      return getLabel('label', 'text-white bg-gray-dark', children, icon)
    case labelWhiteOnDarkGreen:
      return getLabel('label', 'text-white bg-green', children, icon)
    case labelWhiteOnRed:
      return getLabel('label', 'text-white bg-red', children, icon)
    case labelWhiteOnYellow:
      return getLabel('label', 'text-white bg-yellow', children, icon)
    case labelWhiteOnPurple:
      return getLabel('label', 'text-white bg-purple', children, icon)
    // Theme
    case themeGray:
      return getLabel('label', 'Label--gray', children, icon)
    case themeDarkGray:
      return getLabel('label', 'Label--gray-darker', children, icon)
    case themeOrange:
      return getLabel('label', 'Label--orange', children, icon)
    case themeOutline:
      return getLabel('label', 'Label--outline', children, icon)
    case themeOutlineGreen:
      return getLabel('label', 'Label--outline Label--outline-green', children, icon)
    // State
    case stateDefault:
      return getLabel('state', '', children, icon)
    case stateGreen:
      return getLabel('state', 'State--green', children, icon)
    case statePurple:
      return getLabel('state', 'State--purple', children, icon)
    case stateRed:
      return getLabel('state', 'State--red', children, icon)
    case stateDefaultSmall:
      return getLabel('state', 'State--small', children, icon)
    case stateGreenSmall:
      return getLabel('state', 'State--green State--small', children, icon)
    case statePurpleSmall:
      return getLabel('state', 'State--small State--purple', children, icon)
    case stateRedSmall:
      return getLabel('state', 'State--small State--red', children, icon)
    case stateOpen:
      return getLabel('state', 'State--green', children, 'git-pull-request')
    case stateClosed:
      return getLabel('state', 'State--red', children, 'git-pull-request')
    case stateMerged:
      return getLabel('state', 'State--purple', children, 'git-merge')
    // Counter
    case counterDefault:
      return getLabel('counter', '', children, icon)
    case counterGray:
      return getLabel('counter', 'Counter--gray', children, icon)
    case counterGrayLight:
      return getLabel('counter', 'Counter--gray-light', children, icon)
    default:
      return null
  }
}

Label.defaultProps = {
  className: '',
  icon: '',
}

Label.propTypes = {
  variant: oneOf(variants).isRequired,
  className: string,
  children: node.isRequired,
  icon: string,
}

export default Label
