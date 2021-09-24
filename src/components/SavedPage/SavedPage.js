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
        let newObject = JSON.parse(localStorageObject)
        this.state.savedReadings.push(newObject)
        })
    }

    render() {
        const readingCards = this.state.savedReadings.map((reading) => {
        return(
            <div className="reading-card" key={Date.now()}>
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