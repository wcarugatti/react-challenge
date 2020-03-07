import React, { useContext } from 'react';
import PokeList from './PokeList';
import Pagination from './Pagination';
import AppContext from '../context/AppContext'

import '../App.css';

const Catalog = ({match}) => {

  const appContext = useContext(AppContext);
  const { count } = appContext

  return (
    <>
      <h3 className='text-primary mb-3'>Total de Pokemons: {count}</h3>
      <PokeList/>
      <Pagination/>
    </>
  );
};

export default Catalog;
