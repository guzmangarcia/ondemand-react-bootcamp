
import styles from './CarouselGrid.module.scss'
import Carousel from '../Carousel/Carousel'


export default function CarouselGrid({ gridData, gridName, carouselName, carouselIndex,buttonFunction , buttonText}) {

    
   
//console.log(userDetails)

    if (gridData === undefined || gridData?.length === 0) return (null);

    // console.log(props.gridData);
    return (

        <div className={styles.styleCarrousel} >
             
            {/* {gridData.map((item, index) => (console.log(item) ))} */}
            {gridData.map((carouselData, index) => (
            
                <Carousel
                    className={styles.imageSmall}
                    carouselName={gridName}
                    carouselKeyIndex={index}
                    key={`${carouselData[0].uniqueId}-${carouselName}-${carouselIndex}-${index}-${carouselData.id}`}
                    carouselInitialSlideIndex={1}
                    data={carouselData}
                    uniqueId={carouselData[0].uniqueId}
                    buttonFunction={()=>{/*console.log("grid",carouselData[0].uniqueId);*/ buttonFunction(carouselData[0].uniqueId)}}
                    buttonText ={buttonText}
                />
            

            ))

            }
        </div >

    );








}