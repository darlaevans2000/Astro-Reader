import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import Reading from "../Reading/Reading"
import "./TomorrowsReading.css";

class TomorrowsReading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseReading: null,
      currentZodiac: props.currentZodiac,
    };
  }

  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=${this.state.currentZodiac}&day=tomorrow`;
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
        <Link to={`/astro-reader/reading/today/${this.state.currentZodiac}`}>
          <button className="today-btn">← Todays reading</button>
        </Link>{" "}
        <br />
        <Reading reading={this.state.responseReading} />
      </div>
    );
  }
}

export default TomorrowsReading;
TomorrowsReading.propTypes = {
  currentZodiac: PropTypes.string
}