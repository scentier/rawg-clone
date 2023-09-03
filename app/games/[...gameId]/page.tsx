import PGame from "./PGame";

interface Props {
  params: { gameId: string };
}

const Game = ({ params: { gameId } }: Props) => {
  return <PGame param={gameId[0]} />;
};

export default Game;
