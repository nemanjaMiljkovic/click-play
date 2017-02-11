import React from 'react';
import { shallow } from 'enzyme';

import Container from '../index';

describe('<Container />', () => {
  it('creates div element', () => {
    const component = shallow(<Container />);
    expect(component.contains(<div></div>)).toHaveLength(2);
  });
});
