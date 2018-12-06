import React from 'react'
import { string, node, oneOf, func } from 'prop-types'
import 'primer/index.scss'

const Button = ({ variant, className, children, onClick }) => {
  if (variant === 'button') {
    return (
      <button
        className={`btn ${className}`.trim()}
        type="button"
        onClick={onClick}
        disabled={className.includes('disabled')}
      >
        {children}
      </button>
    )
  } if (variant === 'link') {
    return (
      <a
        className={`btn ${className}`.trim()}
        href="#url"
        role="button"
        onClick={onClick}
        disabled={className.includes('disabled')}
      >
        {children}
      </a>
    )
  } if (variant === 'button-link') {
    return (
      <button
        type="button"
        className="btn-link"
        onClick={onClick}
        disabled={className.includes('disabled')}
      >
        {children}
      </button>
    )
  }

  return null
}

Button.defaultProps = {
  className: '',
  onClick: () => {},
}

Button.propTypes = {
  variant: oneOf(['button', 'link', 'button-link']).isRequired,
  className: string,
  children: node.isRequired,
  onClick: func,
}

export default Button
