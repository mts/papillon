import {
  circleBadgeSmallIcon,
  circleBadgeMediumIcon,
  circleBadgeLargeIcon,
} from './CircleBadgeIcon.render'

describe('<Avatar />', () => {
  let wrapper

  describe('Instance', () => {
    test('must be an instance of CircleBadgeIcon', () => {
      wrapper = renderMount(circleBadgeSmallIcon)
      expect(wrapper.find('CircleBadgeIcon')).toHaveLength(1)
    })

    test('must be an instance of CircleBadgeIcon', () => {
      wrapper = renderMount(circleBadgeMediumIcon)
      expect(wrapper.find('CircleBadgeIcon')).toHaveLength(1)
    })

    test('must be an instance of CircleBadgeIcon', () => {
      wrapper = renderMount(circleBadgeLargeIcon)
      expect(wrapper.find('CircleBadgeIcon')).toHaveLength(1)
    })
  })

  describe('Snaphot', () => {
    test('must match circleBadgeSmallIcon', () => {
      expect(global.renderToJSON(circleBadgeSmallIcon)).toMatchSnapshot()
    })

    test('must match circleBadgeMediumIcon', () => {
      expect(global.renderToJSON(circleBadgeMediumIcon)).toMatchSnapshot()
    })

    test('must match circleBadgeLargeIcon', () => {
      expect(global.renderToJSON(circleBadgeLargeIcon)).toMatchSnapshot()
    })
  })
})
