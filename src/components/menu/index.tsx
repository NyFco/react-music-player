import useMusic from '../../store/useMusic';

import Item from './Item';

interface Props {
  menuIsOpen: boolean;
  setMenuIsOpen: (prop: boolean) => void;
}

const Menu = ({ menuIsOpen, setMenuIsOpen }: Props) => {
  const { playList } = useMusic();

  return (
    <div id="menu-container" style={{ display: menuIsOpen ? 'flex' : 'none' }}>
      <aside id="menu">
        <ul>
          {playList.map((music) => (
            <Item music={music} key={music.id} />
          ))}
        </ul>
      </aside>
      <div
        id="rest"
        onClick={() => {
          setMenuIsOpen(false);
        }}
      />
    </div>
  );
};
export default Menu;
