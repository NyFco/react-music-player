import { useEffect, useRef } from 'react';

import useMusic from '../../store/useMusic';

import Cover from './cover';

const Player = () => {
  const { set_player_ref, playList, currently_playing_idx } = useMusic();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    set_player_ref(audioRef);
  }, [set_player_ref]);

  return (
    <div id="player-container">
      <Cover />
      <div id="controls-container">
        <audio
          id="controls"
          src={playList[currently_playing_idx].src}
          controls
          ref={audioRef}
        />
      </div>
    </div>
  );
};
export default Player;
