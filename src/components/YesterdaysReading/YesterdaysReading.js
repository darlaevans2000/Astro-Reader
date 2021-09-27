import React, { Component } from "react";
import {
  Link
} from 'react-router-dom';
import "./YesterdaysReading.css";

class YesterdaysReading extends Component {
  constructor(props) {
    super(props);
    this.state = {
      responseReading: {},
      currentZodiac: props.currentZodiac,
    };
  }

  componentDidMount() {
    const URL = `https://aztro.sameerkumar.website/?sign=${this.state.currentZodiac}&day=yesterday`;
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
        <Link to={`/astro-reader/reading/today/${this.state.currentZodiac}`}><button className="today-btn1">Todays reading →</button></Link><br/>
        <section className='reading-card'>
        Date: {this.state.responseReading.current_date} <br />
        Description: {this.state.responseReading.description} <br />
        Compatibility: {this.state.responseReading.compatibility} <br />
        Lucky Number: {this.state.responseReading.lucky_number} <br />
        Lucky Time: {this.state.responseReading.lucky_time} <br />
        Color: {this.state.responseReading.color} <br />
        Date Range: {this.state.responseReading.date_range} <br />
        Mood: {this.state.responseReading.mood} <br />
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
        </section>
      </div>
    );
  }
}

export default YesterdaysReading;
