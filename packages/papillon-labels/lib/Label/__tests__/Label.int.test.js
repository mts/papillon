import {
  // regular
  labelVariant,
  labelWhiteOnBlueVariant,
  labelWhiteOnDarkGrayVariant,
  labelWhiteOnGreenVariant,
  labelWhiteOnRedVariant,
  labelWhiteOnYellowVariant,
  labelWhiteOnPurpleVariant,
  // theme
  themeGrayVariant,
  themeDarkGrayVariant,
  themeOrangeVariant,
  themeOutlineVariant,
  themeOutlineGreenVariant,
  // state
  stateVariant,
  stateDefaultVariant,
  stateGreenVariant,
  statePurpleVariant,
  stateRedVariant,
  stateDefaultSmallVariant,
  stateGreenSmallVariant,
  statePurpleSmallVariant,
  stateRedSmallVariant,
  stateOpenVariant,
  stateClosedVariant,
  stateMergedVariant,
  // counter
  counterVariant,
  counterDefaultVariant,
  counterGrayVariant,
  counterGrayLightVariant,
} from './Label.int.render'

describe('<Label />', () => {
  describe('Snaphot', () => {
    describe('regular', () => {
      test('must match labelVariant', () => {
        expect(global.renderToJSON(labelVariant)).toMatchSnapshot()
      })

      test('must match labelWhiteOnBlueVariant', () => {
        expect(global.renderToJSON(labelWhiteOnBlueVariant)).toMatchSnapshot()
      })

      test('must match labelWhiteOnDarkGrayVariant', () => {
        expect(global.renderToJSON(labelWhiteOnDarkGrayVariant)).toMatchSnapshot()
      })

      test('must match labelWhiteOnGreenVariant', () => {
        expect(global.renderToJSON(labelWhiteOnGreenVariant)).toMatchSnapshot()
      })

      test('must match labelWhiteOnRedVariant', () => {
        expect(global.renderToJSON(labelWhiteOnRedVariant)).toMatchSnapshot()
      })

      test('must match labelWhiteOnYellowVariant', () => {
        expect(global.renderToJSON(labelWhiteOnYellowVariant)).toMatchSnapshot()
      })

      test('must match labelWhiteOnPurpleVariant', () => {
        expect(global.renderToJSON(labelWhiteOnPurpleVariant)).toMatchSnapshot()
      })
    })

    describe('theme', () => {
      test('must match themeGrayVariant', () => {
        expect(global.renderToJSON(themeGrayVariant)).toMatchSnapshot()
      })

      test('must match themeDarkGrayVariant', () => {
        expect(global.renderToJSON(themeDarkGrayVariant)).toMatchSnapshot()
      })

      test('must match themeOrangeVariant', () => {
        expect(global.renderToJSON(themeOrangeVariant)).toMatchSnapshot()
      })

      test('must match themeOutlineVariant', () => {
        expect(global.renderToJSON(themeOutlineVariant)).toMatchSnapshot()
      })

      test('must match themeOutlineGreenVariant', () => {
        expect(global.renderToJSON(themeOutlineGreenVariant)).toMatchSnapshot()
      })
    })

    describe('state', () => {
      test('must match stateVariant', () => {
        expect(global.renderToJSON(stateVariant)).toMatchSnapshot()
      })

      test('must match stateDefaultVariant', () => {
        expect(global.renderToJSON(stateDefaultVariant)).toMatchSnapshot()
      })

      test('must match stateGreenVariant', () => {
        expect(global.renderToJSON(stateGreenVariant)).toMatchSnapshot()
      })

      test('must match statePurpleVariant', () => {
        expect(global.renderToJSON(statePurpleVariant)).toMatchSnapshot()
      })

      test('must match stateRedVariant', () => {
        expect(global.renderToJSON(stateRedVariant)).toMatchSnapshot()
      })

      test('must match stateDefaultSmallVariant', () => {
        expect(global.renderToJSON(stateDefaultSmallVariant)).toMatchSnapshot()
      })

      test('must match stateGreenSmallVariant', () => {
        expect(global.renderToJSON(stateGreenSmallVariant)).toMatchSnapshot()
      })

      test('must match statePurpleSmallVariant', () => {
        expect(global.renderToJSON(statePurpleSmallVariant)).toMatchSnapshot()
      })

      test('must match stateRedSmallVariant', () => {
        expect(global.renderToJSON(stateRedSmallVariant)).toMatchSnapshot()
      })

      test('must match stateOpenVariant', () => {
        expect(global.renderToJSON(stateOpenVariant)).toMatchSnapshot()
      })

      test('must match stateClosedVariant', () => {
        expect(global.renderToJSON(stateClosedVariant)).toMatchSnapshot()
      })

      test('must match stateMergedVariant', () => {
        expect(global.renderToJSON(stateMergedVariant)).toMatchSnapshot()
      })
    })

    describe('counter', () => {
      test('must match counterVariant', () => {
        expect(global.renderToJSON(counterVariant)).toMatchSnapshot()
      })

      test('must match counterDefaultVariant', () => {
        expect(global.renderToJSON(counterDefaultVariant)).toMatchSnapshot()
      })

      test('must match counterGrayVariant', () => {
        expect(global.renderToJSON(counterGrayVariant)).toMatchSnapshot()
      })

      test('must match counterGrayLightVariant', () => {
        expect(global.renderToJSON(counterGrayLightVariant)).toMatchSnapshot()
      })
    })
  })
})
