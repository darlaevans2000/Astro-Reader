import React, { Component } from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
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
        <section className="reading-card">
          Date: {this.state.responseReading.current_date} <br />
          Description: {this.state.responseReading.description} <br />
          Compatibility: {this.state.responseReading.compatibility} <br />
          Lucky Number: {this.state.responseReading.lucky_number} <br />
          Lucky Time: {this.state.responseReading.lucky_time} <br />
          Color: {this.state.responseReading.color} <br />
          Date Range: {this.state.responseReading.date_range} <br />
          Mood: {this.state.responseReading.mood} <br />
          <button
            className="save-btn"
            onClick={() => {
              localStorage.setItem(
                this.state.responseReading.lucky_number +
                  this.state.responseReading.lucky_time,
                JSON.stringify(this.state.responseReading)
              );
            }}
          >
            Save Reading
          </button>
        </section>
      </div>
    );
  }
}

export default TomorrowsReading;
TomorrowsReading.propTypes = {
  currentZodiac: PropTypes.string
}