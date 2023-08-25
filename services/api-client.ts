import axios, { AxiosError } from "axios";

export default axios.create({
  params: {
    baseurl: "https://api.rawg.io/api",
    key: process.env.RAWG_API_KEY,
  },
});

export { AxiosError };
