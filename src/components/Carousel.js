import React from "react"
import PropTypes from "prop-types"
import styles from './Carrousel.module.scss'

class CarouselElement extends React.Component {
    constructor(props) {
        super(props)
        this.itemRef = React.createRef()
    }


    static propTypes = {
        id: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,

    }

    componentDidMount() {
        const state= (this.props.id === this.props.slideIndex)
         this.itemRef.current.style.display = state
            ? "block"
            : "none"
    }

    componentDidUpdate() {
        const state= (this.props.id === this.props.slideIndex)
        this.itemRef.current.style.display = state
            ? "block"
            : "none"
    }


    render() {
        return (
            <div className={styles.Carrouseldatatyle} ref={this.itemRef} >
                <div className="mySlides fade">
                    
                    <img src={this.props.src} alt={this.props.alt} className={styles.styleCarrouselImage}/>
                    <div className="numbertext">{this.props.id}/{this.props.count}</div>
                    <div className="text">{this.props.text}</div>
                </div>
            </div>);

    }

};


export default class Carousel extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            slideIndex: props.slideIndex
        }
        this.prevClick = this.prevClick.bind(this)
        this.nextClick = this.nextClick.bind(this)
        // console.log("slideIndex:" + props.slideIndex)
    }
    

    static propTypes = {
        data: PropTypes.array.isRequired,
        slideIndex: PropTypes.number,
        carouselName:PropTypes.string.isRequired,
        carouselIndex:PropTypes.number.isRequired
    }


    setIndex(nextIndex)
    {
        if (nextIndex> this.props.data.length) { this.setState({ slideIndex: 1 }) }
        else {
            if (nextIndex < 1) { this.setState({ slideIndex: this.props.data.length }) }
            else{  this.setState({ slideIndex: nextIndex });}
        }

    }

    prevClick() {
        this.setIndex(this.state.slideIndex-1);
    }
    nextClick() {
        this.setIndex(this.state.slideIndex+1);     

    }
    

    render() {
        return (
            <div className={styles.styleCarrousel} >
                    {this.props.data.map((item,index) =>  (console.log(`${this.props.carouselName}-${this.props.carouselIndex}-${index}-${item.id}`))) }                        
                    {this.props.data.map((item,index) =>  (<CarouselElement key={`${this.props.carouselName}-${this.props.carouselIndex}-${index}-${item.id}`} count={this.props.data.length} slideIndex={this.state.slideIndex} {...item} />))}
                    <button className={styles.prev} onClick={this.prevClick} >❮</button>
                    <span className={styles.dot}></span>
                    <button className={styles.next} onClick={this.nextClick} >❯</button>
            

            </div >
        );

    };






}