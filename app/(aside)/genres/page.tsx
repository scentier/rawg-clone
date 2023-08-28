"use client";
import httpServices from "@/services/http-services";
import { useEffect, useState } from "react";

type TGenre = {
  id: number;
  name: string;
};

const Genres = () => {
  const [gameGenres, setGameGenres] = useState<TGenre[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  useEffect(() => {
    const { request, cancel } = httpServices("/genres").getAll();
    request
      .then((res) => res.json())
      .then((data) => {
        setGameGenres(data.results);
        setLoading(false);
        console.log("test");
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
