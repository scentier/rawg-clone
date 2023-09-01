import getGenres from "@/services/get-genres";

const PGenres = async () => {
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
    </div>
  );
};

export default PGenres;
