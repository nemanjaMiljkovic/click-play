import React from 'react';
import { shallow } from 'enzyme';
import AudioPlayer from 'react-responsive-audio-player';
import Player from '../index';

describe('Player', () => {
  const component = shallow(<Player />);
  it('renders AudioPlayer', () => {
    expect(component.find(AudioPlayer).node).toBeDefined();
  });
});
