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
    const res = await fetch(this.endpoint, {
      cache: "no-store",
    });

    if (!res.ok) throw new Error("failed to fetch");

    // bug: console.log before and after resolve work. but immediately render to component
    // hasil: load seluruh page setelah 2 ditik bukan render component
    await new Promise((resolve) => setTimeout(resolve, 2000));

    const data = await res.json();

    return data;
  }
}

export default (arg: string) => new HttpFetch(arg);
