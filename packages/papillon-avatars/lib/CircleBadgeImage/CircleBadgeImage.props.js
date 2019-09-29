import { string } from 'prop-types'

export const propTypes = {
  src: string.isRequired,
  className: string,
  alt: string.isRequired,
}

export const defaultProps = {
  className: '',
}
