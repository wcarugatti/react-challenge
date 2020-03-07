import React, { useContext } from "react";
import { Redirect } from "react-router-dom";
import AppContext from "../context/AppContext";
import noimg from "../No_image_available.png";

export default function PokeDetails({ match }) {
  const appContext = useContext(AppContext);
  const { details } = appContext;
  const pokeName = match.params.name;
  const pokeInfo = details[pokeName];

  if (!pokeInfo) {
    return <Redirect push to="/" />;
  }

  return (
    <div className="card poke-details">
      <div className="text-center">
        <img
          src={
            pokeInfo && pokeInfo.sprites.front_default
              ? pokeInfo.sprites.front_default
              : noimg
          }
          alt=""
          className="card-img-top mx-auto"
          style={{ width: "25vh" }}
        />
      </div>
      <div>
        <table className="table mb-0">
          <tbody>
            <tr>
              <th>Nome</th>
              <td>{pokeName}</td>
            </tr>
            <tr>
              <th>Id</th>
              <td>{pokeInfo.id}</td>
            </tr>
            <tr>
              <th>Experiência Base</th>
              <td>{pokeInfo.base_experience}</td>
            </tr>
            <tr>
              <th>Altura</th>
              <td>{pokeInfo.height}</td>
            </tr>
            <tr>
              <th>Peso</th>
              <td>{pokeInfo.weight}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
