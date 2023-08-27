"use client";
import { useEffect, useState } from "react";
import axios from "axios";

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
      <ul>
        {isLoading
          ? "Loading..."
          : gameGenres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
      </ul>
    </div>
  );
};

export default Aside;
