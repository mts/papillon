import { string, node, oneOf, func } from 'prop-types'

export const propTypes = {
  variant: oneOf(['button', 'link', 'button-link']).isRequired,
  className: string,
  children: node.isRequired,
  onClick: func,
}

export const defaultProps = {
  className: '',
  onClick: () => {},
}
