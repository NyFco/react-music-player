import { create } from 'zustand';

import safeInYourArmsCover from '../assets/tracks/safe in your arms/cover.jpg';
import safeInYourArms from '../assets/tracks/safe in your arms/Safe In your arms.mp3';

interface MusicType {
  src: string;
  title: string;
  singer: string;
  cover: string;
  primary_color: string;
  second_color: string;
}

interface State {
  playerRef: React.RefObject<HTMLAudioElement> | null;
  playList: MusicType[];
  currently_playing_idx: number;
  isPlaying: boolean;
  spent: number;
  set_player_ref: (ref: React.RefObject<HTMLAudioElement>) => void;
  set_currently_playing: (idx: number) => void;
  setIsPlaying: (value: boolean) => void;
  setSpent: (value: number) => void;
  play_next: () => void;
  play_prev: () => void;
}

const useMusic = create<State>((set) => ({
  playerRef: null,
  playList: [
    {
      src: safeInYourArms,
      title: 'Safe In Your Arms',
      singer: 'Markvard',
      cover: safeInYourArmsCover,
      primary_color: '#A7BF81',
      second_color: '#48526B',
    },
  ],
  currently_playing_idx: 0,
  isPlaying: false,
  spent: 0,
  set_player_ref: (ref) => set(() => ({ playerRef: ref })),
  set_currently_playing: (idx) => set(() => ({ currently_playing_idx: idx })),
  setIsPlaying: (value) => set(() => ({ isPlaying: value })),
  setSpent: (value) => set(() => ({ spent: value })),
  play_next: () =>
    set((state) => ({
      currently_playing_idx:
        state.currently_playing_idx + 1 > state.playList.length
          ? 0
          : state.currently_playing_idx + 1,
    })),
  play_prev: () =>
    set((state) => ({
      currently_playing_idx:
        state.currently_playing_idx - 1 > state.playList.length
          ? 0
          : state.currently_playing_idx - 1,
    })),
}));

export default useMusic;
