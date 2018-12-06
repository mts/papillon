import {
  menu,
  menuWithIconAvatarCounter,
  menuWithHeading,
} from './Menu.render'

describe('<Navigation />', () => {
  describe('Snaphot', () => {
    test('must match menu', () => {
      expect(global.renderToJSON(menu)).toMatchSnapshot()
    })

    test('must match menuWithIconAvatarCounter', () => {
      expect(global.renderToJSON(menuWithIconAvatarCounter)).toMatchSnapshot()
    })

    test('must match menuWithHeading', () => {
      expect(global.renderToJSON(menuWithHeading)).toMatchSnapshot()
    })
  })
})
