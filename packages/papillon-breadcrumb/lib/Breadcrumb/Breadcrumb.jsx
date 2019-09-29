import React from 'react'
import { generate } from 'shortid'
import { propTypes } from './Breadcrumb.props'
import '@primer/css/index.scss'
import '@primer/css/core/index.scss'

export const Breadcrumb = ({ items, selectedIndex }) => (
  <nav aria-label="Breadcrumb">
    <ol>
      {items.map((item, index) => {
        const { href, text } = item

        if (index !== selectedIndex) {
          return (
            <li key={generate()} className="breadcrumb-item text-small">
              <a href={href}>{text}</a>
            </li>
          )
        }

        return (
          <li key={generate()} className="breadcrumb-item breadcrumb-item-selected text-small text-gray" aria-current="page">
            {text}
          </li>
        )
      })}
    </ol>
  </nav>
)

Breadcrumb.propTypes = propTypes
