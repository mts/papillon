import React from 'react'
import { propTypes } from './FlashMessages.props'
import '@primer/css/alerts/index.scss'
import '@primer/css/core/index.scss'

export const FlashMessages = ({ children }) => <div className="flash-messages">{children}</div>

FlashMessages.propTypes = propTypes
