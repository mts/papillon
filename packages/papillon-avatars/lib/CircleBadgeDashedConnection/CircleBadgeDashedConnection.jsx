import React from 'react'
import { generate } from 'shortid'
import { propTypes } from './CircleBadgeDashedConnection.props'
import '@primer/css/avatars/index.scss'
import '@primer/css/core/index.scss'

export const CircleBadgeDashedConnection = ({ children }) => (
  <div className="DashedConnection">
    <ul className="d-flex list-style-none flex-justify-between" aria-label="A sample GitHub workflow">
      {children.map(child => (
        <li key={generate()} className="CircleBadge CircleBadge--small" aria-label="GitHub">
          {child}
        </li>
      ))}
    </ul>
  </div>
)

CircleBadgeDashedConnection.propTypes = propTypes
