import React from 'react';
import PropTypes from 'prop-types'
import styles from './Slider.module.scss'


class SliderElement extends React.Component {

    static propTypes = {
        id: PropTypes.number.isRequired,
        count: PropTypes.number.isRequired,
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
        text: PropTypes.string.isRequired,
        rangeValue: PropTypes.number.isRequired
    }

    constructor(props) {
        super(props)
        this.itemRef = React.createRef();
    }




    componentDidMount() {

        const state = (this.props.id === this.props.rangeValue)
        this.itemRef.current.style.display = state
            ? "block"
            : "none"
    }

    componentDidUpdate() {

        const state = (this.props.id === this.props.rangeValue)
        this.itemRef.current.style.display = state
            ? "block"
            : "none"
    }


    render() {
        return (
            <div ref={this.itemRef} >
                <div style={{width:'100%'}}>
                    <img className={this.props.className} src={this.props.src} alt={this.props.alt} />
                    <div className={styles.text}>{this.props.text} ({this.props.id}/{this.props.count})</div>
                </div>
            </div>);

    }

};



export default class Slider extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            rangeValue: 1
        }
        this.itemRef = React.createRef()
        this.onChange = this.onChange.bind(this)
      
    }


    static propTypes = {
        elements: PropTypes.array.isRequired,
    }
    onChange(event) {

        this.setState({ rangeValue: parseInt(this.itemRef.current.value) });
    }


    render() {
        return (
            <div className={styles.text} >
                <div >
                    {this.props.elements.map((item) => (<SliderElement className={styles.slideShowContainer} key={item.id} id={item.id} count={this.props.elements.length} rangeValue={this.state.rangeValue} {...item} />))}
                    <input type="range" min="1" max={this.props.elements.length} value={this.state.rangeValue} ref={this.itemRef} onChange={this.onChange} className="slider" />
                </div>

            </div >
        );

    };






}