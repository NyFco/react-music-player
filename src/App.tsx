import { useState } from 'react';
import { MenuOutlined } from '@ant-design/icons';

import useMusic from './store/useMusic';
import { Menu, Player } from './components';

import './App.scss';

function App() {
  const { playList, currently_playing_idx } = useMusic();
  const [menuIsOpen, setMenuIsOpen] = useState<boolean>(false);

  return (
    <div
      id="root"
      style={{ backgroundColor: playList[currently_playing_idx].primary_color }}
    >
      <button
        id="open-menu-btn"
        onClick={() => {
          setMenuIsOpen(true);
        }}
      >
        <MenuOutlined />
      </button>
      <Player />
      <Menu menuIsOpen={menuIsOpen} setMenuIsOpen={setMenuIsOpen} />
    </div>
  );
}

export default App;
