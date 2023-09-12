import { MusicType } from '../../store/useMusic';

interface Props {
  music: MusicType;
}

const Item = ({ music }: Props) => {
  return (
    <li className="music-item">
      <img className="music-item-cover" src={music.cover} alt={music.title} />
      <h2>
        {music.title} - {music.singer}
      </h2>
    </li>
  );
};
export default Item;
