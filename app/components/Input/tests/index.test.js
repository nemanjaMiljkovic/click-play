import React from 'react';
import { shallow } from 'enzyme';

import Input from '../index';
import StyledInput from '../Input';

describe('<Input />', () => {
  it('creates input element', () => {
    const component = shallow(<Input />);
    expect(component.find(StyledInput)).toHaveLength(1);
    expect(component.find('.form-control')).toBeDefined();
  });
});
