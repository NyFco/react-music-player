interface Props {
  calcPercentage: (event: React.MouseEvent<HTMLDivElement>) => number;
}

const Progress = ({ calcPercentage }: Props) => {
  return (
    <div id="progress" onClick={(e) => console.log(calcPercentage(e))}>
      <div id="spent" />
    </div>
  );
};
export default Progress;
