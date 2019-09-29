import { string, node } from 'prop-types'

export const propTypes = {
  className: string,
  children: node.isRequired,
  icon: string,
}

export const defaultProps = {
  className: '',
  icon: '',
}
