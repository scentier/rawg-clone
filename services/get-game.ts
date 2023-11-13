import { TGame } from "@/lib/types";
import httpFetch from "./http-fetch";

export default async (param: string) => {
  const res = await httpFetch(`/games/${param}`).getData<TGame>();
  //   const data = await res.results;
  return res;
};
