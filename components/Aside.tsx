"use client";
import { useEffect, useState } from "react";

type TGenre = {
  id: number;
  name: string;
};

const Aside = () => {
  const [gameGenres, setGameGenres] = useState<TGenre[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  type TStr = {
    [index: string]: string;
  };

  const apiUrl = (tag: string) => {
    const url = {
      base: process.env.NEXT_PUBLIC_RAWG_API_URL,
      apiKey: `?key=${process.env.NEXT_PUBLIC_RAWG_API_KEY}`,
    };

    return url.base + tag + url.apiKey;
  };

  useEffect(() => {
    fetch(apiUrl("/genres"), {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      cache: "no-store",
    })
      .then((res) => res.json())
      .then((data) => {
        setGameGenres(data.results);
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
