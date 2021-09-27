import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';

class TomorrowsReading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseReading: {},
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
    return (
      <div>
        <Link to={`/astro-reader/reading/today/${this.state.currentZodiac}`}><button>Todays reading</button></Link><br/>
        <Link to={`/astro-reader/reading/yesterday/${this.state.currentZodiac}`}><button>Yesterdays reading</button></Link><br/>
        Current Date: {this.state.responseReading.current_date} <br />
        Compatibility: {this.state.responseReading.compatibility} <br />
        Lucky Number: {this.state.responseReading.lucky_number} <br />
        Lucky Time: {this.state.responseReading.lucky_time} <br />
        Color: {this.state.responseReading.color} <br />
        Date Range: {this.state.responseReading.date_range} <br />
        Mood: {this.state.responseReading.mood} <br />
        Description: {this.state.responseReading.description} <br />
        <button
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
      </div>
    );
  }
}

export default TomorrowsReading;