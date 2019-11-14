import React from 'react'
import cx from 'classnames'
import { generate } from 'shortid'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import { propTypes, defaultProps } from './Blankslate.props'
import '@primer/css/blankslate/index.scss'
import '@primer/css/core/index.scss'

export const Blankslate = ({ className, children, icons }) => (
  <div className={cx(className, 'blankslate')}>
    {icons &&
      icons.map(icon => (
        <span key={generate()} className="blankslate-icon">
          <Octicon size="small" icon={getIconByName(icon)} />
        </span>
      ))}
    {children}
  </div>
)

Blankslate.propTypes = propTypes

Blankslate.defaultProps = defaultProps
