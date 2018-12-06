import container from './Container.render'

describe('<Layout />', () => {
  let wrapper

  describe('Instance', () => {
    test('must be an instance of Container', () => {
      wrapper = renderMount(container)
      expect(wrapper.find('Container')).toHaveLength(1)
    })
  })

  describe('Snaphot', () => {
    test('must match container', () => {
      expect(global.renderToJSON(container)).toMatchSnapshot()
    })
  })
})
