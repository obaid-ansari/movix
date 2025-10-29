import { use } from "react";
import { MovieContext } from "../context/MovieProvider";

export const useMovie = () => {
  return use(MovieContext);
};
