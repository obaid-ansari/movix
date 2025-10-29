import React from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";

const Home = () => {
  return (
    <div className="bg-black text-white">
      <SearchBar />
      <MovieList />
    </div>
  );
};

export default Home;
