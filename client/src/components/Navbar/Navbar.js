/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [navbarBg, setNavbarbg] = useState(false);
  window.addEventListener("scroll", (e) => {
    if (window.scrollY > 0) {
      setNavbarbg(true);
    } else {
      setNavbarbg(false);
    }
  });
  return (
    <nav
      className={`navbar navbar-expand-lg navbar-light sticky-top ${
        navbarBg && "bg-light shadow-sm"
      }`}
    >
      <div className="container">
        <Link
          className="navbar-brand text-uppercase fw-bold text-decoration-none"
          to="/"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 256 256"
          >
            <rect width="256" height="256" fill="none"></rect>
            <circle
              cx="128"
              cy="128"
              r="72"
              fill="none"
              stroke="#ffb566"
              strokeMiterlimit="10"
              strokeWidth="16"
            ></circle>
            <polyline
              points="128 88 128 128 168 128"
              fill="none"
              stroke="#ffb566"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></polyline>
            <path
              d="M88,68.1l6.8-37.5a8,8,0,0,1,7.9-6.6h50.6a8,8,0,0,1,7.9,6.6L168,68.1"
              fill="none"
              stroke="#ffb566"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
            <path
              d="M88,187.9l6.8,37.5a8,8,0,0,0,7.9,6.6h50.6a8,8,0,0,0,7.9-6.6l6.8-37.5"
              fill="none"
              stroke="#ffb566"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="16"
            ></path>
          </svg>
          Rolex
        </Link>

        <ul className="navbar ms-auto d-flex mb-2 mb-lg-0">
          <li className="nav-item">
            <NavLink
              className="nav-link"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
              to="/cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M184,184H69.8L41.9,30.6A8,8,0,0,0,34.1,24H16"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></path>
                <circle
                  cx="80"
                  cy="204"
                  r="20"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></circle>
                <circle
                  cx="184"
                  cy="204"
                  r="20"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></circle>
                <path
                  d="M62.5,144H188.1a15.9,15.9,0,0,0,15.7-13.1L216,64H48"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></path>
              </svg>
            </NavLink>
          </li>

          <li className="nav-item">
            <a className="nav-link" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <path
                  d="M128,216S28,160,28,92A52,52,0,0,1,128,72h0A52,52,0,0,1,228,92C228,160,128,216,128,216Z"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></path>
              </svg>
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
                viewBox="0 0 256 256"
              >
                <rect width="256" height="256" fill="none"></rect>
                <circle
                  cx="128"
                  cy="96"
                  r="64"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></circle>
                <path
                  d="M31,216a112,112,0,0,1,194,0"
                  fill="none"
                  stroke="#000000"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="8"
                ></path>
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;