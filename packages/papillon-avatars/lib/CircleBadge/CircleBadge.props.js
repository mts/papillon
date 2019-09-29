import { string, node } from 'prop-types'

export const propTypes = {
  size: string.isRequired,
  className: string,
  children: node.isRequired,
}

export const defaultProps = {
  className: '',
}
