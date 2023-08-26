interface Props {
  singer: string;
  title: string;
}

const Title = ({ singer, title }: Props) => {
  return (
    <h1>
      {title} - {singer}
    </h1>
  );
};
export default Title;
