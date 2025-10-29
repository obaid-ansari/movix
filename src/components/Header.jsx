import React from "react";
import { Link, useMatches } from "react-router-dom";
import { FaHeart } from "react-icons/fa";
import { useMovie } from "../hook/useMovie";

const Header = () => {
  const { saved } = useMovie();

  return (
    <header className="sticky-top shadow-sm">
      <nav className="navbar navbar-expand-lg bg-black navbar- py-3">
        <div className="container px-4">
          {/* Brand */}
          <Link
            className="navbar-brand fw-bold fs-3 text-danger text-uppercase tracking-wide"
            to="/"
          >
            Movix
          </Link>

          {/* Toggler for mobile */}
          <button
            className="navbar-toggler bg-danger px-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="bg-danger px-3 navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto align-items-center gap-3 fs-5">
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  New Ones
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Movies
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light" to="/">
                  Privacy
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-light me-2" to="/">
                  FAQ
                </Link>
              </li>

              {/* Heart Icon */}
              <li className="nav-item d-flex align-items-center position-relative">
                <Link to="/liked">
                  <FaHeart size={22} className="text-danger" />
                </Link>
                <p className="badge position-absolute top-75 start-50">
                  {saved.length}
                </p>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
