import { useEffect, useRef } from 'react';

import useMusic from '../../store/useMusic';

import Control from './Control';
import Cover from './Cover';
import Progress from './Progress';
import Title from './Title';

const Player = () => {
  const {
    set_player_ref,
    playList,
    currently_playing_idx,
    isPlaying,
    setIsPlaying,
    spent,
    setSpent,
  } = useMusic();

  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    set_player_ref(audioRef);
  }, [set_player_ref]);

  const calcPercentage = (event: React.MouseEvent<HTMLDivElement>): number => {
    const target = event.currentTarget as HTMLDivElement;
    return ((event.clientX - target.offsetLeft) * 100) / target.offsetWidth;
  };

  const playHandle = (mode: 'play' | 'pause'): void => {
    if (mode === 'play') {
      setIsPlaying(true);
      audioRef?.current?.play();
    } else {
      setIsPlaying(false);
      audioRef?.current?.pause();
    }
  };

  return (
    <div id="player-container">
      <Cover />
      <Title
        singer={playList[currently_playing_idx].singer}
        title={playList[currently_playing_idx].title}
      />
      <Progress
        calcPercentage={calcPercentage}
        spent={spent}
        setSpent={setSpent}
      />
      <Control isPlaying={isPlaying} playHandle={playHandle} />
      <audio
        src={playList[currently_playing_idx].src}
        controls
        ref={audioRef}
      />
    </div>
  );
};
export default Player;
