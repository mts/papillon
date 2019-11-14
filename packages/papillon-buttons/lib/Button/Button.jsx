import React from 'react'
import cx from 'classnames'
import { propTypes, defaultProps } from './Button.props'
import '@primer/css/buttons/index.scss'
import '@primer/css/core/index.scss'

export const Button = ({ variant, className, children, onClick }) => {
  if (variant === 'button') {
    return (
      <button className={cx(className, 'btn')} type="button" onClick={onClick} disabled={className.includes('disabled')}>
        {children}
      </button>
    )
  }
  if (variant === 'link') {
    return (
      <a className={cx(className, 'btn')} href="#url" role="button" onClick={onClick} disabled={className.includes('disabled')}>
        {children}
      </a>
    )
  }
  if (variant === 'button-link') {
    return (
      <button type="button" className="btn-link" onClick={onClick} disabled={className.includes('disabled')}>
        {children}
      </button>
    )
  }

  return null
}

Button.propTypes = propTypes

Button.defaultProps = defaultProps
