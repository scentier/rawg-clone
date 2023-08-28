"use client";
import { useEffect, useState } from "react";
import httpServices from "@/services/http-services";
import Link from "next/link";
import { TGames } from "@/components/Types";
import GridCard from "@/components/GridCard";

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
        if (err.name === "AbortErro") return;
        setFetchError(err.message);
        setLoading(false);
      });

    return cancel;
  }, []);
  return (
    <>
      <div>
        <p className="text-red-400">{fetchError}</p>

        {isLoading ? "Loading..." : <GridCard grids={games} />}
      </div>
    </>
  );
};

export default HomePage;
