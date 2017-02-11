/*
 * HomePage
 *
 * This is the first thing users see of our App, at the '/' route
 *
 * NOTE: while this component should technically be a stateless functional
 * component (SFC), hot reloading does not currently support SFCs. If hot
 * reloading is not a necessity for you then you can refactor it and remove
 * the linting exception.
 */

import React, { PureComponent } from 'react';
import Header from '../../components/Header';
import Playlist from '../../components/Playlist';
import Player from '../../components/Player';
export default class HomePage extends PureComponent { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <div className="home">
        <Header />
        <Playlist />
        <Player />
      </div>
    );
  }
}
