import { circleBadgeSmallImage, circleBadgeMediumImage, circleBadgeLargeImage } from './CircleBadgeImage.render'

describe('<Avatar />', () => {
  describe('Snaphot', () => {
    test('must match circleBadgeSmallImage', () => {
      expect(global.renderToJSON(circleBadgeSmallImage)).toMatchSnapshot()
    })

    test('must match circleBadgeMediumImage', () => {
      expect(global.renderToJSON(circleBadgeMediumImage)).toMatchSnapshot()
    })

    test('must match circleBadgeLargeImage', () => {
      expect(global.renderToJSON(circleBadgeLargeImage)).toMatchSnapshot()
    })
  })
})
