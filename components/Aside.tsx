"use client";
import { useEffect, useState } from "react";
import apiClient from "@/services/api-client";
import axios from "axios";
// import { URL } from "next/dist/compiled/@edge-runtime/primitives/url";

type TGenre = {
  id: number;
  name: string;
};

const Aside = () => {
  const [gameGenres, setGameGenres] = useState<TGenre[]>([]);
  const [isLoading, setLoading] = useState(true);
  const [fetchError, setFetchError] = useState("");

  const url = new URL(process.env.NEXT_PUBLIC_RAWG_API_URL!);
  const params = { key: process.env.NEXT_PUBLIC_RAWG_API_KEY! };
  const urlSearch = new URLSearchParams(params).toString();
  console.log(urlSearch);

  useEffect(() => {
    // axios
    //   .create({
    //     baseURL: process.env.NEXT_PUBLIC_RAWG_API_URL,
    //     params: {
    //       key: process.env.NEXT_PUBLIC_RAWG_API_KEY,
    //     },
    //   })
    //   .get("/genres")
    //   .then((res) => {
    //     setGameGenres(res.data.results);
    //     setLoading(false);
    //   })
    //   .catch((err) => {
    //     setFetchError(err.name + ": " + err.message);
    //     setLoading(false);
    //   });

    // -------------------------------------------
    const params = new URLSearchParams({
      key: "def905f9db934108b3b937ff5734f314",
    });
    fetch("https://api.rawg.io/api/genres?" + params, {
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
