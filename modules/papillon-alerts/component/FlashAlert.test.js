import React from 'react';
import { shallow } from 'enzyme';

import FlashAlert from './FlashAlert';

const getComponent = () => (
  <div className='p-4'>
    <FlashAlert>
      Flash message goes here.
    </FlashAlert>
  </div>
);

const renderShallow = () => {
  return shallow(getComponent());
};

describe('<FlashAlert />', () => {
  let wrapper;

  describe('Instance', () => {
    test('must be an instance of FlashAlert', () => {
      wrapper = renderShallow();
      expect(wrapper.find('FlashAlert')).toBeTruthy();
    });
  });

  describe('Snaphot', () => {
    test('must match h1', () => {
      expect(global.renderToJSON(getComponent())).toMatchSnapshot();
    });
  });
});
