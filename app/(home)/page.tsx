"use client";
import GridCard from "@/components/GridCard";
import useGames from "@/hooks/useGames";

const HomePage = () => {
  const { games, isLoading, fetchError } = useGames();
  return (
    <>
      <div>
        <p className="text-red-400">{fetchError}</p>

        {isLoading ? "Loading..." : <GridCard grids={games} />}
      </div>
    </>
  );
};

export default HomePage;
