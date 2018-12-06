import circleBadgeDashedConnection from './CircleBadgeDashedIcon.render'

describe('<Avatar />', () => {
  describe('Snaphot', () => {
    test('must match circleBadgeDashedConnection', () => {
      expect(global.renderToJSON(circleBadgeDashedConnection)).toMatchSnapshot()
    })
  })
})
