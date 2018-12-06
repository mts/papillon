import {
  blankslate,
  blankslateIcon,
  blankslateNarrow,
  blankslateCapped,
  blankslateSpacious,
  blankslateLarge,
  blankslateCleanBackground,
} from './Blankslate.render'

describe('<Blankslate />', () => {
  describe('Snaphot', () => {
    test('must match blankslate', () => {
      expect(global.renderToJSON(blankslate)).toMatchSnapshot()
    })

    test('must match blankslateIcon', () => {
      expect(global.renderToJSON(blankslateIcon)).toMatchSnapshot()
    })

    test('must match blankslateNarrow', () => {
      expect(global.renderToJSON(blankslateNarrow)).toMatchSnapshot()
    })

    test('must match blankslateCapped', () => {
      expect(global.renderToJSON(blankslateCapped)).toMatchSnapshot()
    })

    test('must match blankslateSpacious', () => {
      expect(global.renderToJSON(blankslateSpacious)).toMatchSnapshot()
    })

    test('must match blankslateLarge', () => {
      expect(global.renderToJSON(blankslateLarge)).toMatchSnapshot()
    })

    test('must match blankslateCleanBackground', () => {
      expect(global.renderToJSON(blankslateCleanBackground)).toMatchSnapshot()
    })
  })
})
