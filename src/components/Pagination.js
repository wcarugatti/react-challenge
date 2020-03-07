import React, { useContext } from 'react';
import AppContext from '../context/AppContext'

const Pagination = () => {

  const appContext = useContext(AppContext);
  const { page, pokesPerPage, count, setPage } = appContext

  const pageNumbers = [];
  var totalPages = Math.ceil(count / pokesPerPage);
  var start = page < 3 ? 1 : page - 2;
  var end = start + 4 < totalPages ? start + 4 : totalPages;
  
  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  const paginate = (e,n) =>{
      e.preventDefault();
      setPage(n)
  }

  return (
    <nav className='mt-3'>
      <ul className="pagination">
        {page > 4 ? (
        <>
        <li>
          <a
            onClick={e => paginate(e,1)}
            href=""
            className={"page-link"}
          >
            1
          </a>
        </li>
        <li><a className="page-link">-</a></li></>) : ""}
        {pageNumbers.map(n => (
          <li key={n} className="page-item">
            <a
              onClick={e => paginate(e,n)}
              href=""
              className={"page-link " + (n === page ? "font-weight-bold" : "")}
            >
              {n}
            </a>
          </li>
        ))}
                {page < totalPages - 3 ? (
        <>
        <li><a className="page-link">-</a></li>
        <li>
          <a
            onClick={e => paginate(e,totalPages)}
            href=""
            className={"page-link"}
          >
            {totalPages}
          </a>
        </li>
        </>) : ""}
      </ul>
    </nav>
  );
};

export default Pagination;
