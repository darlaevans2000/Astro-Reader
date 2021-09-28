import React, { Component } from "react";
import PropTypes from 'prop-types';
import "./Reading.css";

class ReadingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reading: props.reading
    };
  }

  render() {
    return (
      <div>
        <section className="reading-card">
          Date: {this.state.reading.current_date} <br />
          Description: {this.state.reading.description} <br />
          Sign Compatibility: {this.state.reading.compatibility} <br />
          Lucky Number: {this.state.reading.lucky_number} <br />
          Lucky Time: {this.state.reading.lucky_time} <br />
          Color: {this.state.reading.color} <br />
          Date Range: {this.state.reading.date_range} <br />
          Mood: {this.state.reading.mood} <br />
          <button
            className="save-btn"
            onClick={() => {
              localStorage.setItem(
                this.state.reading.lucky_number +
                  this.state.reading.lucky_time,
                JSON.stringify(this.state.reading)
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

export default ReadingPage;
ReadingPage.propTypes = {
  reading: PropTypes.object
}