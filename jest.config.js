// https://github.com/FormidableLabs/enzyme-matchers/tree/master/packages
import 'jest-enzyme';

import renderer from 'react-test-renderer';

import Enzyme, {shallow, mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

global.renderToJSON = component => {
  return renderer.create(component).toJSON();
};

global.renderMount = (component) => {
  return mount(component);
}

global.renderShallow = (component) => {
  return shallow(component);
}
