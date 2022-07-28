import React from 'react';
import PropTypes from 'prop-types';
import styles from './Slider.module.scss';

export default class SliderElement extends React.Component {
  constructor(props) {
    super(props);
    this.itemRef = React.createRef();
  }

  componentDidMount() {
    const state = this.props.id === this.props.rangeValue;
    this.itemRef.current.style.display = state ? 'block' : 'none';
  }

  componentDidUpdate() {
    const state = this.props.id === this.props.rangeValue;
    this.itemRef.current.style.display = state ? 'block' : 'none';
  }

  render() {
    return (
      <div ref={this.itemRef}>
        <div style={{ width: '100%' }}>
          <img
            className={this.props.className}
            src={this.props.src}
            alt={this.props.alt}
          />
          <div className={styles.text}>
            {this.props.text}
            {' '}
            (
            {this.props.id}
            /
            {this.props.count}
            )
          </div>
        </div>
      </div>
    );
  }
}
SliderElement.propTypes = {
  id: PropTypes.number.isRequired,
  count: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  rangeValue: PropTypes.number.isRequired,
};
