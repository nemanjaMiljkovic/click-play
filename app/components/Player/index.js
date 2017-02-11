import React from 'react';
import AudioPlayer from 'react-responsive-audio-player';

export default function () {
  const playlist = [{ url: 'https://out-1.awdio.com/services/v1/player/play/96431', displayText: 'Track 1 - a track to remember' },
         { url: 'song2.ogg', displayText: 'Oggs Oggs Oggs' }];
  return (
    <AudioPlayer autoplay={false} autoplayDelaySeconds={2.1} playlist={playlist} style={{ position: 'fixed', bottom: 0 }} />
  );
}
