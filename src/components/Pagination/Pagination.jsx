/* eslint-disable react/no-array-index-key */
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react';
import styles from './Pagination.module.scss';

export default function Pagination({ totalPages, currentPage, setCurrentPage }) {
  const [pages, setPages] = useState([]);

  useEffect(() => {
    if (currentPage > totalPages && totalPages > 0) {
      setCurrentPage(1);
      return;
    }
    const pagesAux = [];
    for (let index = 1; index <= totalPages; index += 1) {
      pagesAux.push(index);
    }
    setPages(pagesAux);
  }, [totalPages, currentPage, setCurrentPage]);

  function handleClick(index) {
    let currentPageAux = currentPage + index;

    if (currentPageAux < 1) {
      currentPageAux = totalPages;
    }
    if (currentPageAux > totalPages) {
      currentPageAux = 1;
    }
    setCurrentPage(currentPageAux);
  }

  function handleClickPage(index) {
    setCurrentPage(index);
  }

  return (
    <div className={styles.maindiv}>

      <button type="button" onClick={() => { handleClick(-1); }}>
        {' '}
        {'<'}
        {' '}
      </button>

      {pages.map((d, index) => ((d === currentPage) ? <span href={`#${d}`} key={index}>{d}</span>
        : <a key={index} href={`#${d}`} onClick={() => handleClickPage(d)}>{d}</a>))}

      <button type="button" onClick={() => { handleClick(+1); }}>
        {' '}
        {'>'}
        {' '}
      </button>
    </div>

  );
}

Pagination.propTypes = {
  totalPages: PropTypes.string.isRequired,
  currentPage: PropTypes.string.isRequired,
  setCurrentPage: PropTypes.string.isRequired,
};
