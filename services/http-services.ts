import apiUrl from "./api-url";

class HttpService {
  endpoint: string;

  constructor(term: string) {
    // 3 cara construc url
    // ---v1------------
    const url =
      process.env.NEXT_PUBLIC_RAWG_API_URL +
      term +
      "?key=" +
      process.env.NEXT_PUBLIC_RAWG_API_KEY;

    // ---v2------------
    const url2 = new URL(process.env.NEXT_PUBLIC_RAWG_API_URL!);
    url2.search = new URLSearchParams({
      key: process.env.NEXT_PUBLIC_RAWG_API_KEY!,
    }).toString();
    url2.pathname = url2.pathname.concat(term);

    // ---v3------------
    const burl = new URL(process.env.NEXT_PUBLIC_RAWG_API_URL!);
    const url3 = new URL(burl.pathname.concat("/address"), burl.href);
    url3.search = new URLSearchParams({
      key: process.env.NEXT_PUBLIC_RAWG_API_KEY!,
    }).toString();

    // ---------------
    this.endpoint = url2.href;
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
