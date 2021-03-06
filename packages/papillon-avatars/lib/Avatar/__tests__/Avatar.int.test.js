import {
  avatar,
  avatarSmall,
  avatarParentChild,
  avatarStackMore,
  avatarStackThreePlus,
  avatarStackTwo,
  avatarStackRight,
} from './Avatar.int.render'

describe('<Avatar />', () => {
  describe('Snaphot', () => {
    test('must match avatar', () => {
      expect(global.renderToJSON(avatar)).toMatchSnapshot()
    })

    test('must match avatarSmall', () => {
      expect(global.renderToJSON(avatarSmall)).toMatchSnapshot()
    })

    test('must match avatarParentChild', () => {
      expect(global.renderToJSON(avatarParentChild)).toMatchSnapshot()
    })

    test('must match avatarStackMore', () => {
      expect(global.renderToJSON(avatarStackMore)).toMatchSnapshot()
    })

    test('must match avatarStackThreePlus', () => {
      expect(global.renderToJSON(avatarStackThreePlus)).toMatchSnapshot()
    })

    test('must match avatarStackTwo', () => {
      expect(global.renderToJSON(avatarStackTwo)).toMatchSnapshot()
    })

    test('must match avatarStackRight', () => {
      expect(global.renderToJSON(avatarStackRight)).toMatchSnapshot()
    })
  })
})
