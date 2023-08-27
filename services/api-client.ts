export default (tag: string) => {
  const url = {
    base: process.env.NEXT_PUBLIC_RAWG_API_URL,
    apiKey: process.env.NEXT_PUBLIC_RAWG_API_KEY,
  };

  return `${url.base}${tag}?key=${url.apiKey}`;
};
