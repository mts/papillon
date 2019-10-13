import React from 'react'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import cx from 'classnames'

export const variants = {
  label: 'label',
  labelWhiteOnBlue: 'label-white-on-blue',
  labelWhiteOnDarkGray: 'label-white-on-dark-gray',
  labelWhiteOnDarkGreen: 'label-white-on-green',
  labelWhiteOnRed: 'label-white-on-red',
  labelWhiteOnYellow: 'label-white-on-yellow',
  labelWhiteOnPurple: 'label-white-on-purple',
  theme: 'theme',
  themeGray: 'theme-gray',
  themeDarkGray: 'theme-dark-gray',
  themeOrange: 'theme-orange',
  themeOutline: 'theme-outline',
  themeOutlineGreen: 'theme-outline-green',
  state: 'state',
  stateDefault: 'state-default',
  stateGreen: 'state-green',
  statePurple: 'state-purple',
  stateRed: 'state-red',
  stateDefaultSmall: 'state-default-small',
  stateGreenSmall: 'state-green-small',
  statePurpleSmall: 'state-purple-small',
  stateRedSmall: 'state-red-small',
  stateOpen: 'state-open',
  stateClosed: 'state-closed',
  stateMerged: 'state-merged',
  counter: 'counter',
  counterDefault: 'counter-default',
  counterGray: 'counter-gray',
  counterGrayLight: 'counter-gray-light',
}

export const getLabel = (variant, className, children, icon) => {
  const { label, theme, state, counter } = variants

  return (
    <span
      className={cx(
        {
          Label: variant === label || variant === theme,
          State: variant === state,
          Counter: variant === counter,
        },
        className,
      )}
    >
      {icon ? <Octicon size="small" icon={getIconByName(icon)} /> : null} {children}
    </span>
  )
}
