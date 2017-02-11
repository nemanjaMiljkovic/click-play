import React from 'react';
import { shallow } from 'enzyme';
import List from '../index';
// import Media from '../media';
// import Wrapper from '../wrapper';

test('<List />', () => {
  it('renders list component with children', () => {
    const component = shallow(<List />);
    expect(component.find('Media')).toHaveLength(1);
    expect(component.find('Wrapper')).toHaveLength(1);
  });
});
