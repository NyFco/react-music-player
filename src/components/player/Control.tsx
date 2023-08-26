import {
  CaretRightOutlined,
  PauseOutlined,
  StepBackwardOutlined,
  StepForwardOutlined,
} from '@ant-design/icons';

interface Props {
  isPlaying: boolean;
}

const Control = ({ isPlaying }: Props) => {
  return (
    <div id="control">
      <StepBackwardOutlined className="control-btn" />
      {isPlaying ? (
        <PauseOutlined className="control-btn" />
      ) : (
        <CaretRightOutlined className="control-btn" />
      )}
      <StepForwardOutlined className="control-btn" />
    </div>
  );
};
export default Control;
