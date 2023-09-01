import Link from "next/link";
import PlatformList from "./PlatformIcons";

// interface di component, type di types.d.ts
interface IGrid {
  grids: TGames[];
}

const imageCrop = (imgurl: string) => {
  return imgurl.replace(
    "media.rawg.io/media/",
    "media.rawg.io/media/crop/600/400/"
  );
};

const GridCard = ({ grids }: IGrid) => {
  return (
    <div className="grid-cols-1 sm:grid md:grid-cols-3 ">
      {grids.map((game) => (
        <div
          key={game.id}
          className="mx-3 mt-6 flex flex-col rounded-lg dark:bg-neutral-700 sm:shrink-0 sm:grow sm:basis-0 shadow-neutral-400 bg-neutral-100"
        >
          <Link href={`/games/${game.id}`}>
            <img
              src={imageCrop(game.background_image)}
              alt={game.name}
              className="rounded-t-lg"
            />
            <h5 className="px-2 py-1 mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
              {game.name}
            </h5>
          </Link>
          <PlatformList platforms={game.parent_platforms} />
        </div>
      ))}
    </div>
  );
};

export default GridCard;
