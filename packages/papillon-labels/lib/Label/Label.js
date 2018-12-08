import React from 'react'
import { string, oneOf, node } from 'prop-types'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import cx from 'classnames'
import 'primer/index.scss'

const Label = ({ variant, className, children, icon }) => (
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

Label.defaultProps = {
  className: '',
  icon: '',
}

Label.propTypes = {
  variant: oneOf(['label', 'state', 'counter']).isRequired,
  className: string,
  children: node.isRequired,
  icon: string,
}

export default Label
