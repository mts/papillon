import {
  flashAlertDefault,
  multipleParagraphs,
  flashWarn,
  flashError,
  flashSuccess,
  flashIcon,
  withDismiss,
  withActionButton,
  fullWidthFlash,
} from './FlashAlert.int.render'

describe('<FlashAlert />', () => {
  describe('Snaphot', () => {
    test('must match flashAlertDefault', () => {
      expect(global.renderToJSON(flashAlertDefault)).toMatchSnapshot()
    })

    test('must match multipleParagraphs', () => {
      expect(global.renderToJSON(multipleParagraphs)).toMatchSnapshot()
    })

    test('must match flashWarn', () => {
      expect(global.renderToJSON(flashWarn)).toMatchSnapshot()
    })

    test('must match flashError', () => {
      expect(global.renderToJSON(flashError)).toMatchSnapshot()
    })

    test('must match flashSuccess', () => {
      expect(global.renderToJSON(flashSuccess)).toMatchSnapshot()
    })

    test('must match flashIcon', () => {
      expect(global.renderToJSON(flashIcon)).toMatchSnapshot()
    })

    test('must match withDismiss', () => {
      expect(global.renderToJSON(withDismiss)).toMatchSnapshot()
    })

    test('must match withActionButton', () => {
      expect(global.renderToJSON(withActionButton)).toMatchSnapshot()
    })

    test('must match fullWidthFlash', () => {
      expect(global.renderToJSON(fullWidthFlash)).toMatchSnapshot()
    })
  })
})
