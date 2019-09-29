import { arrayOf, shape, string, number, node } from 'prop-types'
import { ReactNode } from 'react'

export const propTypes = {
  aria: shape({
    label: string,
  }),
  className: string,
  items: arrayOf(
    shape({
      href: string,
      role: string,
      title: string,
      text: string,
      icon: string,
    }),
  ).isRequired,
  action: node,
  selectedIndex: number.isRequired,
}

export const defaultProps = {
  aria: {
    label: '',
  },
  className: '',
  action: ReactNode,
}
