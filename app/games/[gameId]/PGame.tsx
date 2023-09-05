import getGame from "@/services/get-game";
import { Suspense } from "react";

interface Props {
  param: string;
}

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
