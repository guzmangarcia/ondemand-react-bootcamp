import React, { useEffect } from 'react';
import styles from './Carrousel.module.scss';
import { useNavigate } from 'react-router-dom';

export function CarouselElement({ className, count, carouselCurrentSlideIndex, src, alt, text, id, navigationLink }) {


    let itemRef = React.createRef();
    const navigate = useNavigate();

    useEffect(() => {

        itemRef.current.style.display = (id === carouselCurrentSlideIndex) ? 'block' : 'none';
    }, [id, carouselCurrentSlideIndex, itemRef]);


    return (
        <div ref={itemRef} className={styles.carrouselMainStyle}>
            <div className={`${styles.fade}`}>

                <div>
                    <img src={src}
                        alt={alt}
                        onClick={() => {

                            if (navigationLink !== undefined) {
                                navigate(navigationLink);

                            }

                        }}
                        className={`${styles.styleCarrouselImage} ${className}`} />
                </div>
                <div className={styles.divtext}>
                    {text.map((element, index) => {
                        return <div key={`${text} ${index}`} className={styles.text}>{element} </div>;
                    })}

                    <div className={styles.text}>  ({id}/{count})</div>
                </div>
            </div>
        </div>);



}
