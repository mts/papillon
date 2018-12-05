import avatarParentChild from './AvatarParentChild.render'

describe('<Avatar />', () => {
  let wrapper

  describe('Instance', () => {
    test('must be an instance of AvatarParentChild', () => {
      wrapper = renderMount(avatarParentChild)
      expect(wrapper.find('AvatarParentChild')).toHaveLength(1)
    })
  })

  describe('Snaphot', () => {
    test('must match avatarParentChild', () => {
      expect(global.renderToJSON(avatarParentChild)).toMatchSnapshot()
    })
  })
})
