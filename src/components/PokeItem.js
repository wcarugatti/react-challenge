import React from "react";
import noimg from "../No_image_available.png";
import { Link } from 'react-router-dom';

const PokeItem = ({ details, name }) => {
  return (
    <Link to={`/pokemon/${name}`}>
      <div className="card text-center poke-card">
        <img
          src={details &&
            details.sprites.front_default
              ? details.sprites.front_default
              : noimg
          }
          alt=""
          className="card-img-top mx-auto"
          style={{ width: "12vh" }}
        />
        <h5 className="poke-name">{name}</h5>
      </div>
    </Link>
  );
};

export default PokeItem;
