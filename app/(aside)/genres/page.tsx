import { useState } from "react";

type Genre = {
  id: number;
  name: string;
  slug: string;
  image_background: string;
};

const getGenres = async (): Promise<Genre[]> => {
  // const [loading, setLoading] = useState();
  const res = await fetch(
    " https://api.rawg.io/api/genres?key=" + process.env.RAWG_API_KEY,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("failed to fetch");
  }

  await new Promise((resolve) => setTimeout(resolve, 2000));

  const data = await res.json();

  return data.results;
};

const GenresPage = async () => {
  const genres = await getGenres();
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {genres.map((genre) => (
        <div className="m-2" key={genre.id}>
          <h1>{genre.name}</h1>
          <div className="aspect-video relative">
            <img
              className="object-cover rounded-md"
              src={genre.image_background.replace(
                "media.rawg.io/media/",
                "media.rawg.io/media/crop/600/400/"
              )}
              alt={genre.name}
            />
          </div>
        </div>
      ))}
      {/* <p className="text-red-400">{fetchError}</p>
      <ul>
        {isLoading
          ? "Loading..."
          : gameGenres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
      </ul> */}
    </div>
  );
};

export default GenresPage;
