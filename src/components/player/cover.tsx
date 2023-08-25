import useMusic from '../../store/useMusic';

const Cover = () => {
  const { playList, currently_playing_idx } = useMusic();

  return (
    <div id="cover-container">
      <img
        id="cover"
        style={{ borderColor: playList[currently_playing_idx].second_color }}
        src={playList[currently_playing_idx].cover}
      />
    </div>
  );
};
export default Cover;
