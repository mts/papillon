import {
  labelDefault,
  design,
  labelThemeGray,
  labelThemeDarkGray,
  labelThemeOrange,
  labelOutline,
  labelOutlineGreen,
  state,
  stateThemes,
  smallStates,
  counter,
  counterInTabs,
  counterInBoxHeaders,
} from './Label.render'

describe('<Label />', () => {
  describe('Snaphot', () => {
    test('must match labelDefault', () => {
      expect(global.renderToJSON(labelDefault)).toMatchSnapshot()
    })

    test('must match design', () => {
      expect(global.renderToJSON(design)).toMatchSnapshot()
    })

    test('must match labelThemeGray', () => {
      expect(global.renderToJSON(labelThemeGray)).toMatchSnapshot()
    })

    test('must match labelThemeDarkGray', () => {
      expect(global.renderToJSON(labelThemeDarkGray)).toMatchSnapshot()
    })

    test('must match labelThemeOrange', () => {
      expect(global.renderToJSON(labelThemeOrange)).toMatchSnapshot()
    })

    test('must match labelOutline', () => {
      expect(global.renderToJSON(labelOutline)).toMatchSnapshot()
    })

    test('must match labelOutlineGreen', () => {
      expect(global.renderToJSON(labelOutlineGreen)).toMatchSnapshot()
    })

    test('must match state', () => {
      expect(global.renderToJSON(state)).toMatchSnapshot()
    })

    test('must match stateThemes', () => {
      expect(global.renderToJSON(stateThemes)).toMatchSnapshot()
    })

    test('must match smallStates', () => {
      expect(global.renderToJSON(smallStates)).toMatchSnapshot()
    })

    test('must match counter', () => {
      expect(global.renderToJSON(counter)).toMatchSnapshot()
    })

    test('must match counterInTabs', () => {
      expect(global.renderToJSON(counterInTabs)).toMatchSnapshot()
    })

    test('must match counterInBoxHeaders', () => {
      expect(global.renderToJSON(counterInBoxHeaders)).toMatchSnapshot()
    })
  })
})