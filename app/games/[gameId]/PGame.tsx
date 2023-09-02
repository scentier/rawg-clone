interface Props {
  paramId: string;
}

const PGame = ({ paramId }: Props) => {
  return <div>My Post: {paramId}</div>;
};

export default PGame;
