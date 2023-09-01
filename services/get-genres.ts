import httpFetch from "./http-fetch";

export default async () => {
  const { data } = await httpFetch("/genres").getData();
  const genres: TGenre[] = await data.results;
  return genres;
};
