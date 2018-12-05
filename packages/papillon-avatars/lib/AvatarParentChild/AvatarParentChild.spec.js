import avatarParentChild from './AvatarParentChild.render'

describe('<Avatar />', () => {
  describe('Snaphot', () => {
    test('must match avatarParentChild', () => {
      expect(global.renderToJSON(avatarParentChild)).toMatchSnapshot()
    })
  })
})
