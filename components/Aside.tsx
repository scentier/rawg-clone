"use client";
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";

type TGenre = {
  id: number;
  name: string;
};

const Aside = () => {
  const [gameGenres, setGameGenres] = useState<TGenre[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    axios
      .create({
        baseURL: process.env.NEXT_PUBLIC_RAWG_API_URL,
        params: {
          key: process.env.NEXT_PUBLIC_RAWG_API_KEY,
        },
      })
      .get("/genres")
      .then((res) => {
        setGameGenres(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setFetchError(err.name + ": " + err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div className="hidden w-1/6 float-left md:block">
      <p className="text-red-400">{fetchError}</p>
      <ul className="mr-2 mt-4">
        {isLoading
          ? "Loading..."
          : gameGenres.map((genre) => (
              <li
                className="p-1 mt-1 border-b-neutral-100 border-b hover:text-orange-500"
                key={genre.id}
              >
                <Link href={`/genres/${genre.id}`}>{genre.name}</Link>
              </li>
            ))}
      </ul>
    </div>
  );
};

export default Aside;
