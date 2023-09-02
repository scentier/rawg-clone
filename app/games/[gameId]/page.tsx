const Game = async ({ params }: { params: { gameId: string } }) => {
  const res = await fetch(
    `${process.env.RAWG_API_URL}/games/${params.gameId}?key=${process.env.RAWG_API_KEY}`,
    {
      cache: "no-store",
    }
  );

  if (!res.ok) throw new Error("failed to fetch");

  console.log("before resolve");
  await new Promise((resolve) => setTimeout(resolve, 1000)); // loading seluruh page bukan render
  console.log("after resolve");

  const data = await res.json();

  return <h1>{data.name}</h1>;
};

export default Game;
