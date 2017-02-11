import React from 'react';
import { shallow } from 'enzyme';

import HomePage from '../index';
import Header from '../../../components/Header';


describe('<HomePage />', () => {
  let renderedComponent;
  beforeEach(() => {
    renderedComponent = shallow(
      <HomePage />
    );
  });
  it('should render the page', () => {
    expect(renderedComponent.find(Header)).toHaveLength(1);
  });
  it('should have three child components', () => {
    expect(renderedComponent.find('.home').children()).toHaveLength(3);
  });
});
