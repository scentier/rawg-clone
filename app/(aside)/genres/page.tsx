"use client";
import { useEffect, useState } from "react";

type TGenre = {
  id: number;
  name: string;
};

type GenresResponse = {
  count: number;
  results: TGenre[];
};

type ParamProps = {
  apiKey: string;
};

const Genres = () => {
  const [gameGenres, setGameGenres] = useState<TGenre[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    fetch(
      "https://api.rawg.io/api/genres?key=def905f9db934108b3b937ff5734f314",
      {
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        cache: "no-store",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setGameGenres(data.results);
        setLoading(false);
        console.log(data);
      })
      .catch((err) => {
        setFetchError(err.name + ": " + err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <p className="text-red-400">{fetchError}</p>
      <ul>
        {isLoading
          ? "Loading..."
          : gameGenres.map((genre) => <li key={genre.id}>{genre.name}</li>)}
      </ul>
    </div>
  );
};

export default Genres;
