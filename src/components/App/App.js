import "./App.css";
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from "../Home/Home"
import ReadingPage from '../ReadingPage/ReadingPage';
import React from 'react';

const App = () => {
  return (
    <div className='app'>
    <main className='main-section'>
      <Switch>
        <Route exact path="/astro-reader"  render={ () =>  <Home />}/>
        <Route exact path="/astro-reader/reading/:currentZodiac" render={ ({ match }) => <ReadingPage currentZodiac={match.params.currentZodiac}/>}/>
        <Route path="*" render={() => <h1>ERROR</h1>}/>
      </Switch>
    </main>
    </div>
  )
}

export default App;
