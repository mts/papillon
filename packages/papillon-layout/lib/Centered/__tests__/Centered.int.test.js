import { centered } from './Centered.int.render'

describe('<Layout />', () => {
  describe('Snaphot', () => {
    test('must match centered', () => {
      expect(global.renderToJSON(centered)).toMatchSnapshot()
    })
  })
})
