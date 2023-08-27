const apiUrl = new URL(process.env.NEXT_PUBLIC_RAWG_API_URL!);
const params = { key: process.env.NEXT_PUBLIC_RAWG_API_KEY! };
apiUrl.search = new URLSearchParams(params).toString();
export default apiUrl;
