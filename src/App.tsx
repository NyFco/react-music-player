import useMusic from './store/useMusic';
import { Player } from './components';

import './App.scss';

function App() {
  const { playList, currently_playing_idx } = useMusic();

  return (
    <div
      id="root"
      style={{ backgroundColor: playList[currently_playing_idx].primary_color }}
    >
      <Player />
    </div>
  );
}

export default App;
