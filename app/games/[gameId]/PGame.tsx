import PlatformList from "@/components/PlatformIcons";
import getGame from "@/services/get-game";
import { Suspense } from "react";

interface Props {
  param: string;
}

const PGame = async ({ param }: Props) => {
  const data: TGame = await getGame(param);
  return (
    <>
      <Suspense fallback={<h1>Loading...</h1>}>
        <article className="m-2 space-y-3">
          <h1 className="text-4xl my">{data.name}</h1>
          <h2 className="text-xl">About</h2>
          <div
            className="text-base space-y-2 justify-between"
            dangerouslySetInnerHTML={{ __html: data.description }}
          />
          <div>
            <p>Platform</p>
            <PlatformList platforms={data.parent_platforms} />
          </div>
          <div>Metascrore</div>
          <div>metacritic</div>
          <div>genres</div>
          <div>genres</div>
        </article>
      </Suspense>
    </>
  );
};

export default PGame;
