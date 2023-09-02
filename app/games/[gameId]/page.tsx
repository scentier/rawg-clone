import { Suspense } from "react";

const getGameDetail = async (gameId: string): Promise<TGame> => {
  const res = await fetch(
    `${process.env.RAWG_API_URL}/games/${gameId}?key=${process.env.RAWG_API_KEY}`,
    {
      cache: "no-store",
    }
  );

  // await new Promise((resolve) => setTimeout(resolve, 5000)); // loading seluruh page bukan render
  if (!res.ok) throw new Error("failed to fetch");
  const data = await res.json();
  return data;
};

const Game = async ({ params }: { params: { gameId: string } }) => {
  const data = await getGameDetail(params.gameId);
  return (
    <article>
      <Suspense fallback={<p>Loading game...</p>}>
        <h1>{data.name}</h1>
      </Suspense>
    </article>
  );
};

export default Game;
