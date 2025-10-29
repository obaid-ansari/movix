import { createContext, useEffect, useState } from "react";
import { getMovieData } from "../services/GetData";

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [search, setSearch] = useState("Marvel"); // default search term
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const [saved, setSaved] = useState(() => {
    const savedItems = localStorage.getItem("movies");
    return savedItems ? JSON.parse(savedItems) : [];
  });

  // ✅ Handle input change
  const handleSearchChange = (event) => {
    setSearch(event.target.value);
  };

  // ✅ Fetch movies dynamically based on search input
  const fetchMovies = async (query) => {
    if (!query) return;
    setLoading(true);
    setError("");

    try {
      const response = await getMovieData(query);
      if (response.status === 200) {
        setMovies(response.data.Search);
      } else {
        setError("No movies found!");
        setMovies([]);
      }
    } catch (err) {
      console.error("Error while fetching data:", err);
      setError("Something went wrong while fetching data.");
    } finally {
      setLoading(false);
    }
  };

  // ✅ Handle search form submit
  const onSubmit = (event) => {
    event.preventDefault();
    if (search.trim() === "") return;
    fetchMovies(search);
  };

  // ✅ Fetch default movies on mount (like Avengers)
  useEffect(() => {
    fetchMovies(search);
  }, []);

  const handleSavedMovie = (movie) => {
    setSaved((prev) => {
      // Avoid saving duplicates
      if (prev.some((item) => item.imdbID === movie.imdbID)) {
        return prev;
      }
      const updatedSaved = [...prev, movie];
      localStorage.setItem("movies", JSON.stringify(updatedSaved));
      return updatedSaved;
    });
  };

  const removeSavedMovie = (id) => {
    setSaved((prev) => {
      const updatedSaved = prev.filter((movie) => movie.imdbID !== id);
      localStorage.setItem("movies", JSON.stringify(updatedSaved));
      return updatedSaved;
    });
  };

  return (
    <MovieContext.Provider
      value={{
        search,
        handleSearchChange,
        onSubmit,
        movies,
        loading,
        error,
        saved,
        handleSavedMovie,
        removeSavedMovie,
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};
