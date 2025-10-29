import axios from "axios";

const api = axios.create({
  baseURL: "https://www.omdbapi.com",
});

export const getMovieData = (movieName) => {
  return api.get(`?apikey=${import.meta.env.VITE_API_KEY}&s=${movieName}`);
};
