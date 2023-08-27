import apiUrl from "./api-url";

class HttpService {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  get() {
    const controller = new AbortController();
    const request = fetch(`${apiUrl.origin}${this.endpoint}${apiUrl.search}`, {
      cache: "no-store",
      signal: controller.signal,
    });

    return {
      request,
      cancel: () => controller.abort(),
    };
  }
}

// export default new HttpService('/games');
// solusinya
const fetchApi = (arg: string) => new HttpService(arg);

export default fetchApi;
