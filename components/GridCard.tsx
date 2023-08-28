import Link from "next/link";
import React from "react";
import { TGames } from "./Types";

type TGrid = {
  grids: TGames[];
};

const imageCrop = (imgurl: string) => {
  return imgurl.replace(
    "media.rawg.io/media/",
    "media.rawg.io/media/crop/600/400/"
  );
};

const GridCard = ({ grids }: TGrid) => {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
      {grids.map((game) => (
        <div className="mx-3 mt-6 flex flex-col rounded-lg bg-white shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0">
          <Link href={`/games/${game.id}`}>
            <img
              src={imageCrop(game.background_image)}
              alt={game.name}
              className="rounded-t-lg"
            />
            <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {game.name}
            </h5>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default GridCard;
