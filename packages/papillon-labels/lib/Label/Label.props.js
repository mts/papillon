import { string, oneOf, node } from 'prop-types'
import { variants } from './Label.library'

export const propTypes = {
  variant: oneOf(Object.values(variants)).isRequired,
  className: string,
  children: node.isRequired,
  icon: string,
}

export const defaultProps = {
  className: '',
  icon: '',
}
