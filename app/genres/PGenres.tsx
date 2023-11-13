import getGenres from "@/services/get-genres";
import mediumImg from "@/lib/medium-img";
import Link from "next/link";

const PGenres = async () => {
  const genres = await getGenres();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4">
      {genres.map((genre) => (
        // <div
        //   key={genre.id}
        //   className="m-2 aspect-video relative bg-contain rounded-md"
        //   style={{
        //     backgroundImage: `url(${mediumImg(genre.image_background)})`,
        //   }}
        // >
        <Link
          key={genre.id}
          href={`/genres/${genre.id}/${genre.slug}`}
          className="m-2 aspect-video relative"
        >
          <h2 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-1/3 flex justify-center items-center bg-orange-600/50 text-xl text-orange-50">
            {genre.name}
          </h2>
          <img
            className="object-cover rounded-md w-full max-h-fit"
            src={mediumImg(genre.image_background)}
            alt={genre.name}
          />
        </Link>
      ))}
    </div>
  );
};

export default PGenres;
