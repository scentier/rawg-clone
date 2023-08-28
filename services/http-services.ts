class HttpService {
  endpoint: string;

  constructor(term: string) {
    const url =
      process.env.NEXT_PUBLIC_RAWG_API_URL +
      term +
      "?key=" +
      process.env.NEXT_PUBLIC_RAWG_API_KEY;

    this.endpoint = url;
  }

  getAll() {
    const controller = new AbortController();
    const request = fetch(this.endpoint, {
      cache: "no-store",
      signal: controller.signal,
    });

    return {
      request,
      cancel: () => controller.abort(),
    };
  }
}

export default (arg: string) => new HttpService(arg);
