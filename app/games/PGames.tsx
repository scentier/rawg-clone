import GridCard from "@/components/GridGames";
import getGames from "@/services/get-games";

const PGames = async () => {
  const games = await getGames();
  return (
    <>
      <GridCard grids={games} />
    </>
  );
};

export default PGames;
