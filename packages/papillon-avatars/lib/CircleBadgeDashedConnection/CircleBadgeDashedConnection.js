import React from 'react'
import { generate } from 'shortid'
import { node } from 'prop-types'
import '@primer/css/avatars/index.scss'
import '@primer/css/utilities/index.scss'

const CircleBadgeDashedConnection = ({ children }) => (
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

CircleBadgeDashedConnection.propTypes = {
  children: node.isRequired,
}

export default CircleBadgeDashedConnection
