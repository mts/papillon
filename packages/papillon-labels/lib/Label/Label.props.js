import { string, oneOf, node } from 'prop-types'
import { variants } from './Label.variant'

export const propTypes = {
  variant: oneOf(variants).isRequired,
  className: string,
  children: node.isRequired,
  icon: string,
}

export const defaultProps = {
  className: '',
  icon: '',
}
