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
        this.state.savedReadings.push(localStorageObject)
        })
    }


    render() {
        return (
          <div>
           hi
          </div>
        );
    }
}

export default SavedPage;