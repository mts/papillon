import { breadcrumb } from './Breadcrumb.int.render'

describe('<Breadcrumb />', () => {
  describe('Snaphot', () => {
    test('must match breadcrumb', () => {
      expect(global.renderToJSON(breadcrumb)).toMatchSnapshot()
    })
  })
})
