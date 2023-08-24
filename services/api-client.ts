import axios from "axios";

export default axios.create({
  params: {
    baseurl: "https://api.rawg.io/api",
    key: "def905f9db934108b3b937ff5734f314",
  },
});
