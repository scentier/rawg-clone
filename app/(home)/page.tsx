"use client";
import { useEffect, useState } from "react";
import httpServices from "@/services/http-services";

type TGames = {
  id: number;
  name: string;
};

const HomePage = () => {
  const [games, setGames] = useState<TGames[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");
  useEffect(() => {
    const fetchGames = httpServices("/games");
    const { request, cancel } = fetchGames.getAll();
    request
      .then((res) => res.json())
      .then((data) => {
        setGames(data.results);
        setLoading(false);
      })
      .catch((err) => {
        setFetchError(err.name + ": " + err.message);
        setLoading(false);
      });
  }, []);
  return (
    <>
      <div>
        <p className="text-red-400">{fetchError}</p>
        <ul>
          {isLoading
            ? "Loading..."
            : games.map((game) => <li key={game.id}>{game.name}</li>)}
        </ul>
      </div>
    </>
  );
};

export default HomePage;
