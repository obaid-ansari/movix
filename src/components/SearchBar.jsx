// components/SearchBar.js
import React from "react";
import { useMovie } from "../hook/useMovie";

const SearchBar = () => {
  const { onSubmit, search, handleSearchChange } = useMovie();

  return (
    <section className="container py-5 d-flex flex-column justify-content-center align-items-center text-center">
      <h1 className="text-light mb-3 fw-bold">Search Your Favorite Movies</h1>
      <p className="text-secondary mb-4">
        Type any movie name and explore results instantly!
      </p>

      <form
        onSubmit={onSubmit}
        className="d-flex w-100 w-md-75 w-lg-50 shadow-sm"
      >
        <input
          className="form-control py-3 px-3 rounded-start border-0 bg-dark text-white"
          placeholder="Search movies..."
          type="text"
          name="search"
          id="search"
          value={search}
          onChange={handleSearchChange}
        />
        <button
          type="submit"
          className="btn btn-danger px-4 fw-semibold rounded-end"
        >
          Search
        </button>
      </form>
    </section>
  );
};

export default SearchBar;
