import { string, node } from 'prop-types'

export const propTypes = {
  className: string,
  children: node.isRequired,
}

export const defaultProps = {
  className: '',
}
