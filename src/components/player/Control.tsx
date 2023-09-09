import {
  CaretRightOutlined,
  PauseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';

interface Props {
  isPlaying: boolean;
  playHandle: (value: 'play' | 'pause') => void;
  nextHandle: () => void;
  prevHandle: () => void;
}

const Control = ({ isPlaying, playHandle, nextHandle, prevHandle }: Props) => {
  return (
    <div id="control">
      <StepBackwardOutlined className="control-btn" onClick={prevHandle} />
      {isPlaying ? (
        <PauseOutlined
          className="control-btn"
          onClick={() => playHandle('pause')}
        />
      ) : (
        <CaretRightOutlined
          className="control-btn"
          onClick={() => playHandle('play')}
        />
      )}
      <StepForwardOutlined className="control-btn" onClick={nextHandle} />
    </div>
  );
};
export default Control;
