import apiClient from "@/services/api-client";
import axios from "axios";
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

const AllGenresPage = async () => {
  // const [gameGenres, setGameGenres] = useState<TGenre[]>([]);
  // const [error, setError] = useState("");

  // const apiUrl = axios.create({
  //   params: {
  //     baseurl: "https://api.rawg.io/api/genres",
  //     // key: process.env.RAWG_API_KEY,
  //     key: "def905f9db934108b3b937ff5734f314",
  //   },
  // });

  const apiBaseUrl = "https://api.rawg.io/api";
  const res = await fetch(
    apiBaseUrl + "/genres?key=" + process.env.RAWG_API_KEY,
    { cache: "no-cache" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  const genres: GenresResponse = await res.json();

  return (
    <>
      <h2>AllGenres</h2>
      <ul>
        {genres.results.map((genre) => (
          <li key={genre.id}>{genre.name}</li>
        ))}
      </ul>
    </>
  );
};

export default AllGenresPage;
