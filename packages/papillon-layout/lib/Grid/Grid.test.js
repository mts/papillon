import grid from './Grid.render'

describe('<Layout />', () => {
  describe('Snaphot', () => {
    test('must match grid', () => {
      expect(global.renderToJSON(grid)).toMatchSnapshot()
    })
  })
})
