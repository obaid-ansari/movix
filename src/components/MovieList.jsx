import React from "react";
import { useMovie } from "../hook/useMovie";
import { Link } from "react-router-dom";

const MovieList = () => {
  const { movies, loading, error, handleSavedMovie, saved } = useMovie();

  // 🕓 Loading state
  if (loading)
    return (
      <p className="text-center text-light py-4 m-0 display-5 fw-light">
        Loading...
      </p>
    );

  // ❌ Error state
  if (error)
    return (
      <div className="text-center text-danger py-5 display-6">{error}</div>
    );

  // 🚫 No movie found
  if (!movies || movies.length === 0) {
    return (
      <div className="text-center py-5">
        <h3 className="text-light mb-3">No Movies Found</h3>
      </div>
    );
  }

  // 🎬 Display movies
  return (
    <div className="container py-4">
      <div className="row g-4">
        {movies.map((movie) => {
          const isSaved = saved.some((item) => item.imdbID === movie.imdbID); // check if already saved

          return (
            <div
              key={movie.imdbID}
              className="col-12 col-md-6 col-lg-3 d-flex justify-content-center"
            >
              <div
                className="card bg-black border-2 text-white rounded-4 overflow-hidden d-flex flex-column shadow-lg border-danger"
                style={{
                  width: "100%",
                  maxWidth: "300px",
                  height: "500px",
                  transition: "all 0.3s ease",
                }}
              >
                <div className="flex-grow-1">
                  <img
                    src={
                      movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"
                    }
                    className="img-fluid w-100"
                    alt={movie.Title}
                    style={{
                      height: "350px",
                      objectFit: "cover",
                    }}
                  />
                </div>

                <div className="text-center p-2 flex-grow-0">
                  <h5
                    className="fw-bold text-white text-truncate"
                    title={movie.Title}
                  >
                    {movie.Title}
                  </h5>
                  <p className="text-danger lead m-1">{movie.Year}</p>
                </div>

                <div className="d-flex justify-content-between pb-3 px-3">
                  <button
                    className={`btn fw-bold btn-outline-light px-4 rounded-4 ${
                      isSaved ? "text-success border-success" : "text-danger"
                    }`}
                    onClick={() => handleSavedMovie(movie)}
                    disabled={isSaved} // disable button if already saved
                  >
                    {isSaved ? "Saved" : "Save"}
                  </button>

                  <Link
                    to={`/movie/${movie.imdbID}`}
                    className="btn text-danger fw-bold btn-outline-light px-4 rounded-4"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MovieList;
