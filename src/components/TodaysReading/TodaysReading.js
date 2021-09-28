import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Reading from "../Reading/Reading"
import "./TodaysReading.css";

class TodaysReading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseReading: null,
      currentZodiac: props.currentZodiac,
    };
  }

  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=${this.state.currentZodiac}&day=today`;
    fetch(URL, {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => {
        this.setState({ responseReading: json });
      });
  }

  render() {
    if (this.state.responseReading === null) {
      return <div className="loading">Loading...</div>;
    }
    return (
      <div>
        <Link
          to={`/astro-reader/reading/yesterday/${this.state.currentZodiac}`}
        >
          <button className="yesterday-btn">←Yesterdays Reading</button>
        </Link>
        <Link to={`/astro-reader/reading/tomorrow/${this.state.currentZodiac}`}>
          <button className="tomorrow-btn">Tomorrows Reading→</button>
        </Link>
        <br />
        <Reading reading={this.state.responseReading} />
      </div>
    );
  }
}

export default TodaysReading;
TodaysReading.propTypes = {
  currentZodiac: PropTypes.string
}