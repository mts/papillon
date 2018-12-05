import flashMessages from './FlashMessages.render'

describe('<FlashMessages />', () => {
  describe('Snaphot', () => {
    test('must match flashMessages', () => {
      expect(global.renderToJSON(flashMessages)).toMatchSnapshot()
    })
  })
})
