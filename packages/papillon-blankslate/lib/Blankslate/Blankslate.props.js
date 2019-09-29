import { string, node, arrayOf } from 'prop-types'

export const propTypes = {
  className: string,
  children: node.isRequired,
  icons: arrayOf(string),
}

export const defaultProps = {
  className: '',
  icons: [],
}
