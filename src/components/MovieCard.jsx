import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

const MovieCard = () => {
  const { id } = useParams(); // 🧩 Get movie ID from URL
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchMovieDetails = async () => {
    try {
      const response = await fetch(
        `https://www.omdbapi.com/?apikey=${
          import.meta.env.VITE_API_KEY
        }&i=${id}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setMovie(data);
      } else {
        setError("Movie not found!");
      }
    } catch (err) {
      console.error(err);
      setError("Failed to fetch movie details.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (loading)
    return <p className="text-center text-black py-5 display-6">Loading...</p>;

  if (error)
    return <p className="text-center text-danger py-5 display-6">{error}</p>;

  return (
    <div className="bg-black">
      <div className="container px-3 py-3 text-center text-light">
        <div className="row justify-content-center">
          <div className="col-md-8 col-lg-6">
            <div className="card bg-dark text-white rounded-4 shadow-lg border-danger">
              <img
                src={movie.Poster !== "N/A" ? movie.Poster : "/no-image.png"}
                alt={movie.Title}
                className="img-fluid rounded-top-4"
                style={{ height: "450px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h3 className="fw-bold">{movie.Title}</h3>
                <p className="text-danger">{movie.Year}</p>
                <p className="text-secondary">{movie.Genre}</p>
                <p className="lead">{movie.Plot}</p>
                <Link to="/" className="btn btn-outline-danger rounded-4 mt-3">
                  Back to Movies
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
