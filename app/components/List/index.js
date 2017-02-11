import React from 'react';
import Wrapper from './wrapper';
import Media from './media';
import MediaItem from './mediaItem';

export default function () {
  return (
    <Wrapper>
      <Media>
        <MediaItem />
      </Media>
    </Wrapper>
  );
}
