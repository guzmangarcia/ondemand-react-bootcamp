import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';
import SliderElement from './SliderElement';

export default class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      rangeValue: 1,
    };
    this.itemRef = React.createRef();
    this.onChange = this.onChange.bind(this);
  }

  onChange() {
    this.setState({ rangeValue: parseInt(this.itemRef.current.value, 10) });
  }

  render() {
    return (
      <div className={styles.text}>
        <div>
          {this.props.elements.map((item) => (
            <SliderElement
              className={styles.slideShowContainer}
              key={item.id}
              id={item.id}
              count={this.props.elements.length}
              rangeValue={this.state.rangeValue}
              {...item}
            />
          ))}
          <input
            type="range"
            min="1"
            max={this.props.elements.length}
            value={this.state.rangeValue}
            ref={this.itemRef}
            onChange={this.onChange}
            className="slider"
          />
        </div>
      </div>
    );
  }
}
Slider.propTypes = {
  elements: PropTypes.array.isRequired,
};
