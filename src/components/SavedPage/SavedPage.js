import React, { Component } from 'react';

class SavedPage extends Component {
    constructor(props){
        super(props);
        this.state = {
          savedReadings: []
        }
    }

        componentDidMount() {
         let userSaved = JSON.parse(localStorage.getItem('savedData'));

        if (localStorage.getItem('savedData')) {
            this.setState({
                savedReadings: [userSaved],
            })
        } else {
            this.setState({
                savedReadings:[],
            })
        }
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