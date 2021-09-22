import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';
import Home from "../Home/Home"
import React from 'react';

const App = () => {
  return (
  <Router>
      <Switch>
        <Route path="/"  render={ () =>  <Home />}/>
        <Route render={() => <h1>Page not found</h1>} />
      </Switch>
  </Router>
  )
}

export default App;
