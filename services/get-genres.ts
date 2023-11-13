import { TGenre } from "@/lib/types";
import httpFetch from "./http-fetch";

export default async () => {
  const data = await httpFetch("/genres").getData<TGenre[]>();
  const genres: TGenre[] = await data.results;
  return genres;
};
