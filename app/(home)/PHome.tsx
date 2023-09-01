import GridCard from "@/components/GridCard";
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
