import { string, shape, node } from 'prop-types'

export const propTypes = {
  className: string,
  aria: shape({
    label: string,
    current: string,
  }),
  href: string.isRequired,
  icon: string,
  children: node.isRequired,
}

export const defaultProps = {
  className: '',
  aria: {},
  icon: '',
}
