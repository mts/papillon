import { container } from './Container.int.render'

describe('<Layout />', () => {
  describe('Snaphot', () => {
    test('must match container', () => {
      expect(global.renderToJSON(container)).toMatchSnapshot()
    })
  })
})
