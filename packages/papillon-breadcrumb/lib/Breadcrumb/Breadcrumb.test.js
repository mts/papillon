import breadcrumb from './Breadcrumb.render'

describe('<Breadcrumb />', () => {
  let wrapper

  describe('Instance', () => {
    test('must be an instance of Breadcrumb', () => {
      wrapper = renderMount(breadcrumb)
      expect(wrapper.find('Breadcrumb')).toHaveLength(1)
    })
  })

  describe('Snaphot', () => {
    test('must match breadcrumb', () => {
      expect(global.renderToJSON(breadcrumb)).toMatchSnapshot()
    })
  })
})
