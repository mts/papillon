import { flashMessages } from './FlashMessages.int.render'

describe('<FlashMessages />', () => {
  describe('Snaphot', () => {
    test('must match flashMessages', () => {
      expect(global.renderToJSON(flashMessages)).toMatchSnapshot()
    })
  })
})
