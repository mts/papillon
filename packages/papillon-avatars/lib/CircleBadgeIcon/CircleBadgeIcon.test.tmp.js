import {
  circleBadgeSmallIcon,
  circleBadgeMediumIcon,
  circleBadgeLargeIcon,
} from './CircleBadgeIcon.render'

describe('<Avatar />', () => {
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
