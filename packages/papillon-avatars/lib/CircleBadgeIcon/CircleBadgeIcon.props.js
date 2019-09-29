import { string } from 'prop-types'

export const propTypes = {
  className: string,
  icon: string.isRequired,
}

export const defaultProps = {
  className: '',
}
