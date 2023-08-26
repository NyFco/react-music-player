import {
  CaretRightOutlined,
  PauseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';

interface Props {
  isPlaying: boolean;
  playHandle: (value: 'play' | 'pause') => void;
}

const Control = ({ isPlaying, playHandle }: Props) => {
  return (
    <div id="control">
      <StepBackwardOutlined className="control-btn" />
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
      <StepForwardOutlined className="control-btn" />
    </div>
  );
};
export default Control;
