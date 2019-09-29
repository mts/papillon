import { string, number } from 'prop-types'

export const propTypes = {
  className: string,
  alt: string.isRequired,
  src: string.isRequired,
  width: number.isRequired,
  height: number.isRequired,
}

export const defaultProps = {
  className: '',
}
