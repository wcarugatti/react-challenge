import React, { useState, useEffect } from "react";
import PokeList from "./components/PokeList";
import Pagination from "./components/Pagination";
import Catalog from "./components/Catalog"
import axios from "axios";
import "./App.css";

const App = () => {
  const [pokes, setPokes] = useState([]);
  const [details, setDetails] = useState({});
  const [count, setCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pokesPerPage, setPokesPerPage] = useState(8);
  const apiUrl = "https://pokeapi.co/api/v2";

  function pokeListUrl(pokesPerPage, page) {
    return `${apiUrl}/pokemon/?limit=${pokesPerPage}&offset=${page *
      pokesPerPage -
      pokesPerPage}`;
  }
  function pokeUrl(name) {
    return `${apiUrl}/pokemon/${name}`;
  }

  useEffect(() => {
    const fetchPokes = async () => {
      setLoading(true);
      const { data } = await axios.get(pokeListUrl(pokesPerPage, page));
      setCount(data.count);
      setPokes(data.results);
      let tempDetails = {};
      for (let i = 0; i < data.results.length; i++) {
        let pokeName = data.results[i].name;
        tempDetails[pokeName] = await axios.get(pokeUrl(pokeName));
      }
      setDetails(tempDetails);
      setLoading(false);
    };
    fetchPokes();
  }, [page]);

  const paginate = pageNumber => setPage(pageNumber);

  return (
    <div className="container mt-5">
      <Catalog />
    </div>
  );
};

export default App;
