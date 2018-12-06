import centered from './Centered.render'

describe('<Layout />', () => {
  describe('Snaphot', () => {
    test('must match centered', () => {
      expect(global.renderToJSON(centered)).toMatchSnapshot()
    })
  })
})
