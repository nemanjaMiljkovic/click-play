import React from 'react';
import { shallow } from 'enzyme';
import H1 from '../index';

test('H1', () => {
  it('renders H1', () => {
    const component = shallow(<H1 />);
    expect(component.find(<H1 />).node).toBeDefined();
  });
});
