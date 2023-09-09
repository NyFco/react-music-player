/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useRef, useState } from 'react';

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
    play_next,
    play_prev,
  } = useMusic();

  const audioRef = useRef<HTMLAudioElement>(null);

  const [times, setTimes] = useState<{
    current: number;
    duration: number;
  }>({
    current: 0,
    duration: 0,
  });

  useEffect(() => {
    set_player_ref(audioRef);
  }, [set_player_ref]);

  const playHandle = (mode: 'play' | 'pause'): void => {
    if (mode === 'play') {
      setIsPlaying(true);
      audioRef?.current?.play();
    } else {
      setIsPlaying(false);
      audioRef?.current?.pause();
    }
  };

  const updateTimeHandle = (e: any): void => {
    const current = e.target.currentTime;
    const duration = e.target.duration;

    setTimes({ current, duration });
  };

  const progressChangeHandle = (e: any) => {
    audioRef.current!.currentTime = e.target.value;
    setTimes({ ...times, current: e.target.value });
  };

  const endHandle = (): void => {
    play_next();
    playHandle('pause');
  };

  const nextHandle = (): void => {
    play_next();
    playHandle('pause');
  };

  const prevHandle = (): void => {
    play_prev();
    playHandle('pause');
  };

  return (
    <div id="player-container">
      <Cover />
      <Title
        singer={playList[currently_playing_idx].singer}
        title={playList[currently_playing_idx].title}
      />
      <Progress
        spent={times.current}
        max={times.duration}
        spentChangeHandle={progressChangeHandle}
      />
      <Control
        isPlaying={isPlaying}
        playHandle={playHandle}
        nextHandle={nextHandle}
        prevHandle={prevHandle}
      />
      <audio
        src={playList[currently_playing_idx].src}
        controls
        ref={audioRef}
        onTimeUpdate={updateTimeHandle}
        onEnded={endHandle}
      />
    </div>
  );
};
export default Player;
