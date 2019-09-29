import { circleBadgeDashedConnection } from './CircleBadgeDashedIcon.int.render'

describe('<Avatar />', () => {
  describe('Snaphot', () => {
    test('must match circleBadgeDashedConnection', () => {
      expect(global.renderToJSON(circleBadgeDashedConnection)).toMatchSnapshot()
    })
  })
})
