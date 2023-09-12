import { create } from 'zustand';

import booyah from '../assets/tracks/booyah/booyah.mp3';
import booyahCover from '../assets/tracks/booyah/cover.jpg';
import safeInYourArmsCover from '../assets/tracks/safe in your arms/cover.jpg';
import safeInYourArms from '../assets/tracks/safe in your arms/Safe In your arms.mp3';
import vibeWithMeCover from '../assets/tracks/vibe with me/cover.jpg';
import vibeWithMe from '../assets/tracks/vibe with me/Vibe With Me.mp3';

export interface MusicType {
  id: number;
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
      id: 0,
      src: safeInYourArms,
      title: 'Safe In Your Arms',
      singer: 'Markvard',
      cover: safeInYourArmsCover,
      primary_color: '#A7BF81',
      second_color: '#48526B',
    },
    {
      id: 1,
      src: booyah,
      title: 'Booyah',
      singer: 'Showtek',
      cover: booyahCover,
      primary_color: '#F54E3D',
      second_color: '#5D2A00',
    },
    {
      id: 2,
      src: vibeWithMe,
      title: 'Vibe With Me',
      singer: 'Joakim Karud',
      cover: vibeWithMeCover,
      primary_color: '#FAF3E0',
      second_color: '#08080A',
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
        state.currently_playing_idx === state.playList.length - 1
          ? 0
          : state.currently_playing_idx + 1,
    })),
  play_prev: () =>
    set((state) => ({
      currently_playing_idx:
        state.currently_playing_idx === 0
          ? state.playList.length - 1
          : state.currently_playing_idx - 1,
    })),
}));

export default useMusic;
