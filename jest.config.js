/* eslint prefer-destructuring: 0 */

// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages
require('jest-enzyme')

const renderer = require('react-test-renderer')

const Enzyme = require('enzyme')

const shallow = Enzyme.shallow
const mount = Enzyme.mount

const Adapter = require('enzyme-adapter-react-16')

Enzyme.configure({ adapter: new Adapter() })

global.renderToJSON = component => renderer.create(component).toJSON()

global.renderMount = component => mount(component)

global.renderShallow = component => shallow(component)
