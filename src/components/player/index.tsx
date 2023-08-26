import { useEffect, useRef } from 'react';

import useMusic from '../../store/useMusic';

import Control from './Control';
import Cover from './Cover';
import Progress from './Progress';

const Player = () => {
  const { set_player_ref, playList, currently_playing_idx } = useMusic();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    set_player_ref(audioRef);
  }, [set_player_ref]);

  const calcPercentage = (event: React.MouseEvent<HTMLDivElement>): number => {
    const target = event.currentTarget as HTMLDivElement;
    return ((event.clientX - target.offsetLeft) * 100) / target.offsetWidth;
  };

  return (
    <div id="player-container">
      <Cover />
      <Progress calcPercentage={calcPercentage} />
      <Control isPlaying={false} />
      <audio
        src={playList[currently_playing_idx].src}
        controls
        ref={audioRef}
      />
    </div>
  );
};
export default Player;
