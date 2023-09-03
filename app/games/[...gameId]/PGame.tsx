import getGame from "@/services/get-game";
import { Suspense } from "react";

interface Props {
  param: string;
}

// const getGameDetail = async (gameId: string): Promise<TGame> => {
//   const res = await fetch(
//     `${process.env.RAWG_API_URL}/games/${gameId}?key=${process.env.RAWG_API_KEY}`,
//     {
//       cache: "no-store",
//     }
//   );

//   if (!res.ok) throw new Error("failed to fetch");
//   const data = await res.json();
//   return data;
// };

const PGame = async ({ param }: Props) => {
  const data = await getGame(param);
  return (
    <>
      <Suspense fallback={<h2>Loading...</h2>}>
        <h2>{data.name}</h2>
      </Suspense>
    </>
  );
};

export default PGame;
