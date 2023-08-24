import useMusic from '../../store/useMusic';

const Cover = () => {
  const { playList, currently_playing_idx } = useMusic();

  return (
    <img
      id="cover"
      style={{ borderColor: playList[currently_playing_idx].second_color }}
      src={playList[currently_playing_idx].cover}
    />
  );
};
export default Cover;
