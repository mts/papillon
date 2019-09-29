import { string, node } from 'prop-types'
import { ReactNode } from 'react'

export const propTypes = {
  className: string,
  href: string.isRequired,
  role: string.isRequired,
  title: string.isRequired,
  icon: string,
  counter: node,
  children: node.isRequired,
}

export const defaultProps = {
  className: '',
  icon: '',
  counter: ReactNode,
}
