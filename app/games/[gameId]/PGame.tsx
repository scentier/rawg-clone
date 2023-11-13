import GenreList from "@/components/GenreList";
import Metascore from "@/components/Metascore";
import PlatformList from "@/components/PlatformIcons";
import ReleaseData from "@/components/ReleaseData";
import { TGame } from "@/lib/types";
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
          <div className="flex flex-row justify-between">
            <div className="py-2 space-y-1">
              <p className="p-1">Platform</p>
              <PlatformList platforms={data.parent_platforms} />
            </div>
            <div className="py-2 space-y-1">
              <p>Metascrore</p>
              <Metascore metacritic={data.metacritic} />
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="py-2 space-y-1">
              <p>Genres</p>
              <GenreList genres={data.genres} />
            </div>
            <div className="py-2 space-y-1">
              <p>Release date</p>
              <ReleaseData released={data.released} />
            </div>
          </div>
        </article>
      </Suspense>
    </>
  );
};

export default PGame;
