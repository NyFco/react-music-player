interface Props {
  calcPercentage: (event: React.MouseEvent<HTMLDivElement>) => number;
  spent: number;
  setSpent: (value: number) => void;
}

const Progress = ({ calcPercentage, spent, setSpent }: Props) => {
  return (
    <div id="progress" onClick={(e) => setSpent(calcPercentage(e))}>
      <div id="spent" style={{ width: `${spent}%` }} />
    </div>
  );
};
export default Progress;
