import React, { Component } from 'react';

class SavedPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          savedReadings: []
        }
    }

        componentDidMount() {
        let values = Object.keys(localStorage);
        return values.forEach((value) => {
        let localStorageObject = localStorage.getItem(`${value}`);
        this.state.savedReadings.push(JSON.parse(localStorageObject))
        })
    }

    render() {
        const readingCards = this.state.savedReadings.map((reading) => {
        return(
            <div className="reading-card" key={reading.current_date}>
                Date Saved: {reading.current_date}
                Description: {reading.description}
            </div>
        )
        });
        return <div className="saved-area">
            {readingCards}
        </div>
    }
}

export default SavedPage;