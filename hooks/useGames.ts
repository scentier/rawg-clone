import httpServices from "@/services/http-services";
import { useEffect, useState } from "react";

const useGames = () => {
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
        if (err.name === "AbortError") return;
        setFetchError(err.message);
        setLoading(false);
      });

    return cancel;
  }, []);
  return { games, isLoading, fetchError };
};

export default useGames;
