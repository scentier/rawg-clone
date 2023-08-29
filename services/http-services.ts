import apiUrl from "./api-url";

class HttpService {
  endpoint: string;

  constructor(term: string) {
    const url =
      process.env.NEXT_PUBLIC_RAWG_API_URL +
      term +
      "?key=" +
      process.env.NEXT_PUBLIC_RAWG_API_KEY;

    console.log("httpservices.endpoint", url);

    // ---------------
    const urla = new URL(process.env.NEXT_PUBLIC_RAWG_API_URL!);
    urla.search = new URLSearchParams({
      key: process.env.NEXT_PUBLIC_RAWG_API_KEY!,
    }).toString();
    urla.pathname = urla.pathname.concat(term);
    console.log("urla---> ", urla.href);
    // ---------------
    // apiUrl bermasalah karena import
    // tiap rendre akant terjadi penambahan pathname
    // /term/term/term/term?key=abc dan seterusnya
    apiUrl.pathname = apiUrl.pathname.concat(term);
    console.log("apiUrl:::->\n", apiUrl.toString());

    // ---------------
    this.endpoint = urla.href;
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
