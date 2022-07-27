import React, { useState, useEffect } from "react"

import styles from './Carrousel.module.scss'
import { useNavigate } from 'react-router-dom'

function CarouselElement({ className, count, carouselCurrentSlideIndex, src, alt, text, id, navigationLink }) {

    //console.log(navigationLink)
    let itemRef = React.createRef()
    const navigate = useNavigate();

    useEffect(() => {

        itemRef.current.style.display = (id === carouselCurrentSlideIndex) ? 'block' : 'none';
    }, [id, carouselCurrentSlideIndex, itemRef])


    return (
        <div ref={itemRef} className={styles.carrouselMainStyle} >
            <div className={`${styles.fade}`}>

                <img src={src}
                    alt={alt}
                    onClick={() => {
                        //  console.log(navigationLink);
                        if (navigationLink !== undefined) {
                            navigate(navigationLink);

                        }

                    }}
                    className={`${styles.styleCarrouselImage} ${className}`} />

                {text.map((element, index) => {
                    return <div key={`${text} ${index}`} className={styles.text} >{element} </div>
                })}

                <div className={styles.text}>  ({id}/{count})</div>

            </div>
        </div>);



}


export default function Carousel({
    className,
    carouselName,
    carouselKeyIndex,
    carouselInitialSlideIndex,
    data,
    uniqueId,
    buttonText,
    buttonFunction }) {

    const [carouselCurrentSlideIndex, setCarouselCurrentSlideIndex] = useState(carouselInitialSlideIndex);


    function setIndex(nextIndex) {
        if (nextIndex > data.length) { setCarouselCurrentSlideIndex(1) }
        else {
            if (nextIndex < 1) { setCarouselCurrentSlideIndex(setCarouselCurrentSlideIndex(data.length)) }
            else { setCarouselCurrentSlideIndex(nextIndex); }
        }

    }

    function prevClick() {
        setIndex(carouselCurrentSlideIndex - 1);
    }
    function nextClick() {
        setIndex(carouselCurrentSlideIndex + 1);

    }

    function dotClick(dot) {
        setIndex(dot);
    }
    if (data === undefined || data?.length === 0) return (null);
    return (

        <div className={styles.styleCarrousel} >
            {
                data.map((item, index) => (
                    <CarouselElement
                        className={`${className}`}
                        key={`${carouselName}-${carouselKeyIndex}-${index}-${item.id}`}
                        count={data.length}
                        carouselCurrentSlideIndex={carouselCurrentSlideIndex} {...item} />))
            }
            <div className={`${styles.styleCarrouselDot} ${className}`}>
                <button className={styles.prev} onClick={prevClick} >❮</button>
                {data.map((item, index) => (
                    <span
                        className={styles.dot}
                        key={`${carouselName}-${carouselKeyIndex}-${index}-${item.id}-dot`}
                        onClick={(() => dotClick(index + 1))}  ></span>))}

                <button className={styles.next} onClick={nextClick} >❯</button>
            </div>
            <br/>
            {(buttonText !== undefined) &&
                <button
                    className={styles.next}
                    onClick={buttonFunction}>
                    {buttonText}
                </button>}
        </div >

    );








}