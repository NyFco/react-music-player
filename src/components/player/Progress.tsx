interface Props {
  spent: number;
  max: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  spentChangeHandle: (event: any) => void;
}

const Progress = ({ spent, spentChangeHandle, max }: Props) => {
  const timeCalc = (seconds: number): string => {
    const min = Math.floor(seconds / 60);
    const sec = Math.floor(seconds - min * 60);
    return `${min || 0}:${(sec || 0) < 10 ? '0' : ''}${sec || 0}`;
  };

  return (
    <div id="progress-container">
      <h2 className="time">{timeCalc(spent)}</h2>
      <input
        id="progress"
        type="range"
        min={0}
        max={max}
        value={spent}
        onChange={spentChangeHandle}
      />
      <h2 className="time">{timeCalc(max)}</h2>
    </div>
  );
};
export default Progress;
