import { TGames } from "@/lib/types";
import httpFetch from "./http-fetch";

export default async () => {
  const data = await httpFetch("/games").getData<TGames[]>();
  const games: TGames[] = await data.results;
  return games;
};
