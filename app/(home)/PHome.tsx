import GridCard from "@/components/GridGames";
import getGames from "@/services/get-games";

const PHome = async () => {
  const games = await getGames();
  return (
    <>
      <GridCard grids={games} />
    </>
  );
};

export default PHome;
