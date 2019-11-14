import React from 'react'
import cx from 'classnames'
import Octicon, { getIconByName } from '@githubprimer/octicons-react'
import { propTypes, defaultProps } from './FlashAlert.props'
import '@primer/css/alerts/index.scss'
import '@primer/css/core/index.scss'

export const FlashAlert = ({ className, children, icon }) => (
  <div className={cx(className, 'flash')}>
    {icon ? (
      <span className="mr-3">
        <Octicon size="small" icon={getIconByName(icon)} />
      </span>
    ) : null}
    {children}
  </div>
)

FlashAlert.propTypes = propTypes

FlashAlert.defaultProps = defaultProps
