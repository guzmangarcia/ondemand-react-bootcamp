import styles from './Pagination.module.scss';
import { useEffect, useState } from "react";




export default function Pagination({ totalPages, currentPage, setCurrentPage }) {



    const [pages, setPages] = useState([]);


    useEffect(() => {
        if (currentPage > totalPages && totalPages > 0) {
            setCurrentPage(1);
            return;
        }
        let pagesAux = []
        for (let index = 1; index <= totalPages; index++) {
            pagesAux.push(index);

        }
        setPages(pagesAux)




    }, [totalPages, currentPage, setCurrentPage]);


    function handleClick(index) {
        let currentPageAux = currentPage + index;

        if (currentPageAux < 1) {
            currentPageAux = totalPages
        }
        if (currentPageAux > totalPages) {
            currentPageAux = 1
        }
        setCurrentPage(currentPageAux)
    }

    function handleClickPage(index) {
        setCurrentPage(index);
    }



    return (
        <div className={styles.maindiv}>
          
            <button onClick={() => { handleClick(-1) }} > {"<"}    </button>

            {pages.map((d, index) => { return (d === currentPage) ? <span href={`#${d}`} key={index} >{d}</span> : <a key={index} href={`#${d}`} onClick={() => handleClickPage(d)} >{d}</a> })}

            <button onClick={() => { handleClick(+1) }} > {">"}    </button>
        </div>

    );



}