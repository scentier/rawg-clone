import Link from "next/link";

interface Props {
  genres: TGenre[];
}
export default function GenreList({ genres: genreList }: Props) {
  return (
    <div className="flex flex-wrap px-2 mb-2 relative overflow-auto">
      {genreList.map((genre) => (
        <span key={genre.id}>
          <Link
            className="underline underline-offset-2 font-medium hover:text-orange-500"
            href={genre.slug}
          >
            {genre.name}
          </Link>
          ,{" "}
        </span>
      ))}
    </div>
  );
}
