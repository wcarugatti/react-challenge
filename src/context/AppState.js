import React, { useState, useEffect } from "react";
import axios from "axios";
import AppContext from "./AppContext";

const AppState = props => {
  const [route, setRoute] = useState("Home");
  const [pokes, setPokes] = useState([]);
  const [details, setDetails] = useState({});
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pokesPerPage, setPokesPerPage] = useState(18);
  const apiUrl = "https://pokeapi.co/api/v2";

  const pokeListUrl = () => {
    return `${apiUrl}/pokemon/?limit=${pokesPerPage}&offset=${page * pokesPerPage -
      pokesPerPage}`;
  };
  const pokeUrl = name => {
    return `${apiUrl}/pokemon/${name}`;
  };

  useEffect(() => {
    const fetchPokes = async () => {
      setLoading(true);
      const { data } = await axios.get(pokeListUrl());
      setCount(data.count);
      setPokes(data.results);
      let tempDetails = {};
      for (let i = 0; i < data.results.length; i++) {
        let pokeName = data.results[i].name;
        if (!details[pokeName]) {
          let res = await axios.get(pokeUrl(pokeName));
          tempDetails[pokeName] = res.data
        }
      }
      setDetails(d => ({ ...d, ...tempDetails }));
      setLoading(false);
    };

    fetchPokes();
  }, [page]);

  return (
    <AppContext.Provider
      value={{
        route,
        setRoute,
        pokes,
        setPokes,
        details,
        setDetails,
        count,
        setCount,
        loading,
        setLoading,
        page,
        setPage,
        pokesPerPage,
        setPokesPerPage,
        pokeListUrl,
        pokeUrl
      }}
    >
      {props.children}
    </AppContext.Provider>
  );
};

export default AppState;
