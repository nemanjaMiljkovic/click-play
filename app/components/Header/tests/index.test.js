import React from 'react';
import { shallow } from 'enzyme';

import Header from '../index';
import Container from '../../Container';
import H1 from '../../H1';

describe('<Header />', () => {
  it('has container and h1 components', () => {
    const component = shallow(<Header />);
    expect(component.find(H1)).toHaveLength(1);
    expect(component.find(Container)).toHaveLength(1);
  });
});
