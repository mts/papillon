import { arrayOf, shape, string, number } from 'prop-types'

export const propTypes = {
  items: arrayOf(
    shape({
      href: string,
      text: string,
    }),
  ).isRequired,
  selectedIndex: number.isRequired,
}
