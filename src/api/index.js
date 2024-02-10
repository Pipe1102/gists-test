import axios from "axios";

export const fetchGists = (count, page) =>
  axios.get(
    `https://api.github.com/gists/public?per_page=${count}&page=${page}`
  );
