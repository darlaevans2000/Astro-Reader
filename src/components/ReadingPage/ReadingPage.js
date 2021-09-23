import React, { Component } from 'react';
import "./ReadingPage.css"

class ReadingPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          responseReading: {},
          currentZodiac: props.currentZodiac
        }
    }

    componentDidMount () {
        const URL = 'https://aztro.sameerkumar.website/?sign=aries&day=today';
        fetch(URL, {
            method: 'POST'
        }).then(response => response.json())
        .then(json => { this.setState({responseReading: json}); });
    }

    render() {
        return (
          <div>
              Current Date: {this.state.responseReading.current_date} <br />
              Compatibility: {this.state.responseReading.compatibility} <br />
              Lucky Number: {this.state.responseReading.lucky_number} <br />
              Lucky Time: {this.state.responseReading.lucky_time} <br />
              Color: {this.state.responseReading.color} <br />
              Date Range: {this.state.responseReading.date_range} <br />
              Mood: {this.state.responseReading.mood} <br />
              Description: {this.state.responseReading.description} <br />
          </div>
        );
    }
}

export default ReadingPage;