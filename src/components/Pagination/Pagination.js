import styled from 'styled-components';
import { useEffect, useState } from "react";

var ButtonStyled = styled.button``
var AStyledUnselected = styled.a``
var AStyledSelected = styled.a``


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
        <div>
            <br />
            <br />
            <ButtonStyled onClick={() => { handleClick(-1) }} > {"<"}    </ButtonStyled>

            {pages.map((d, index) => { return (d === currentPage) ? <AStyledUnselected key={index} >{d}</AStyledUnselected> : <AStyledSelected key={index} href={`#${d}`} onClick={() => handleClickPage(d)} >{d}</AStyledSelected> })}

            <ButtonStyled onClick={() => { handleClick(+1) }} > {">"}    </ButtonStyled>
        </div>

    );



}