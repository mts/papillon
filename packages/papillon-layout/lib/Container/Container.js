import React from 'react'
import { string, node } from 'prop-types'
import '@primer/css/layout/index.scss'
import '@primer/css/core/index.scss'

const Container = ({ className, children }) => <div className={`container ${className}`.trim()}>{children}</div>

Container.defaultProps = {
  className: '',
}

Container.propTypes = {
  className: string,
  children: node.isRequired,
}

export default Container
