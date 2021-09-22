import React, { Component } from 'react';


class ReadingPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentZodiac: props.currentZodiac
      }
  }

  render() {
    return ( 
    <div className="card" id="card">
      <h3>{this.state.currentZodiac}</h3>
    </div>
    )
}
}

export default ReadingPage;