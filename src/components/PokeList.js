import React, { useContext } from 'react';
import spinner from '../spinner.gif';
import PokeItem from './PokeItem'
import AppContext from '../context/AppContext'

const Pokes = () => {

  const mql = window.matchMedia('(max-width: 800px)')

  const itemStyle = {
    display: 'grid',
    gridTemplateColumns: `repeat(${mql.matches? 3 : 6}, 1fr)`,
    gridGap: '1rem'
  };

  const appContext = useContext(AppContext);
  const { pokes,details, loading } = appContext
  
  if (loading) {
    return <>
    <img src={spinner} alt="Loading..." style={{ width: '200px', margin: 'auto', display: 'block' }} />
  </>;
  }

  return (
    <div style={itemStyle}>
      {pokes.map((poke,i) => (
        <PokeItem key={i} details={details[poke.name]} name={poke.name}/>
      ))}
    </div>
  );
};

export default Pokes;
