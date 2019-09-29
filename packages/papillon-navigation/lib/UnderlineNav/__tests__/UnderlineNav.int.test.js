import {
  underlineNav,
  underlineNavActions,
  underlineNavRight,
  underlineNavRightWithActions,
  underlineNavWithCounter,
} from './UnderlineNav.int.render'

describe('<Navigation />', () => {
  describe('Snaphot', () => {
    test('must match underlineNav', () => {
      expect(global.renderToJSON(underlineNav)).toMatchSnapshot()
    })

    test('must match underlineNavActions', () => {
      expect(global.renderToJSON(underlineNavActions)).toMatchSnapshot()
    })

    test('must match underlineNavRight', () => {
      expect(global.renderToJSON(underlineNavRight)).toMatchSnapshot()
    })

    test('must match underlineNavRightWithActions', () => {
      expect(global.renderToJSON(underlineNavRightWithActions)).toMatchSnapshot()
    })

    test('must match underlineNavWithCounter', () => {
      expect(global.renderToJSON(underlineNavWithCounter)).toMatchSnapshot()
    })
  })
})
