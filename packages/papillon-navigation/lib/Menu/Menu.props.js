import { arrayOf, shape, string, number, node } from 'prop-types'

export const propTypes = {
  aria: shape({
    label: string,
    current: string,
  }).isRequired,
  heading: shape({
    text: string,
  }),
  items: arrayOf(
    shape({
      href: string,
      text: string,
      icon: string,
      html: node,
    }),
  ).isRequired,
  selectedIndex: number.isRequired,
}

export const defaultProps = {
  heading: {},
}
