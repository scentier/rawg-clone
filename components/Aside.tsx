import getGenres from "@/services/get-genres";
import Link from "next/link";

export default async function Aside() {
  const gameGenres = await getGenres();

  return (
    <div className="hidden w-1/6 float-left md:block">
      <ul className="mr-2 mt-4">
        {gameGenres.map((genre) => (
          <li
            key={genre.id}
            className="p-1 mt-1 border-b-neutral-100 border-b hover:text-orange-500"
          >
            <Link href={`/genres/${genre.id}/${genre.slug}`}>{genre.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
