import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="navbar bg-primary">
      <div className="container">
        <h2 className="header-title">Catálogo de Pokemons</h2>
        <Link to="/">
          <h5>Home</h5>
        </Link>
      </div>
    </nav>
  );
};

export default Header;
