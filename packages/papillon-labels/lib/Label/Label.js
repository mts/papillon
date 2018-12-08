
import React from 'react'
import { string, oneOf, node } from 'prop-types'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import cx from 'classnames'
import 'primer/index.scss'
import {
  variants,
  RegularWhiteOnBlue
} from './Label.variant'

const Label = ({ variant, className, children, icon }) => {
  if (
    variant === 'label' ||
    variant === 'state' ||
    variant === 'counter') {
      return (
        <span
          className={cx({
            'Label': variant === 'label',
            'State': variant === 'state',
            'Counter': variant === 'counter',
          }, className)}
        >
          {icon ? <Octicon size='small' icon={getIconByName(icon)} /> : null} {children}
        </span>
      )
  } else {
    switch (variant) {
      case 'regular-white-on-blue':
        return <RegularWhiteOnBlue>{children}</RegularWhiteOnBlue>
    }
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
