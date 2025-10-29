import React from "react";
import { Link } from "react-router-dom";
import { useMovie } from "../hook/useMovie";

const Saved = () => {
  const { saved, removeSavedMovie } = useMovie();

  return (
    <div className="py-4 bg-black">
      <div className="container">
        <div className="row g-4">
          {saved.length === 0 ? (
            <h3 className="text-center text-white mt-5">
              No saved movies yet.
            </h3>
          ) : (
            saved.map((movie) => (
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
                  }}
                >
                  <div className="flex-grow-1">
                    <img
                      src={
                        movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"
                      }
                      alt={movie.Title}
                      className="img-fluid w-100"
                      style={{ height: "350px", objectFit: "cover" }}
                    />
                  </div>

                  <div className="text-center p-2 flex-grow-0">
                    <h5 className="fw-bold text-white text-truncate">
                      {movie.Title}
                    </h5>
                    <p className="text-danger lead m-1">{movie.Year}</p>
                  </div>

                  <div className="d-flex justify-content-between pb-3 px-3">
                    <button
                      onClick={() => removeSavedMovie(movie.imdbID)}
                      className="btn btn-outline-light text-danger fw-bold px-4 rounded-4"
                    >
                      Remove
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
            ))
          )}
        </div>

        <div className="d-flex justify-content-center py-3 px-3">
          <Link to="/" className="btn btn-danger px-4  rounded-4">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Saved;
