// A http-service v2

class HttpFetch {
  endpoint: string;

  constructor(parameters: string) {
    const url = new URL(process.env.RAWG_API_URL!);
    url.search = new URLSearchParams({
      key: process.env.RAWG_API_KEY!,
    }).toString();
    url.pathname = url.pathname.concat(parameters);

    this.endpoint = url.href;
  }

  async getData<T>() {
    const controller = new AbortController();

    const res = await fetch(this.endpoint, {
      cache: "no-store",
      signal: controller.signal,
    });

    if (!res.ok) throw new Error("failed to fetch");

    await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await res.json();

    return {
      data,
      cancel: () => controller.abort(),
    };
  }
}

export default (arg: string) => new HttpFetch(arg);
