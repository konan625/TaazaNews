import React from "react";
import SearchBar from "./SearchBar";
import { Link, Outlet } from "react-router-dom";
import logo from "../assets/logo.png";

export default function NavBar() {
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Link to="/">
            <img src={logo} alt="Taaza News" className="logo" />
          </Link>
        </div>
        <div className="navbar-right">
          <ul className="navbar-links">
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
          <SearchBar />
        </div>
      </nav>
      <Outlet />
    </>
  );
}
