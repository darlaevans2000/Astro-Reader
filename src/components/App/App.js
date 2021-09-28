import "./App.css";
import {
  Route,
  Switch,
} from 'react-router-dom';
import Home from "../Home/Home"
import Header from "../Header/Header"
import YesterdaysReading from '../YesterdaysReading/YesterdaysReading';
import TomorrowsReading from '../TomorrowsReading/TomorrowsReading';
import ReadingPage from '../ReadingPage/ReadingPage';
import SavedPage from '../SavedPage/SavedPage';
import React from 'react';

const App = () => {
  return (
    <div className='app'>
      <Header />
    <main className='main-section'>
      <Switch>
        <Route exact path="/"  render={ () =>  <Home />}/>
        <Route exact path="/astro-reader/reading/today/:currentZodiac" render={ ({ match }) => <ReadingPage currentZodiac={match.params.currentZodiac}/>}/>
        <Route exact path="/astro-reader/reading/yesterday/:currentZodiac" render={ ({ match }) => <YesterdaysReading currentZodiac={match.params.currentZodiac}/>}/>
        <Route exact path="/astro-reader/reading/tomorrow/:currentZodiac" render={ ({ match }) => <TomorrowsReading currentZodiac={match.params.currentZodiac}/>}/>
        <Route exact path="/astro-reader/saved" render={ () => <SavedPage />}/>
        <Route path="*" render={() => <h1>Uh oh ~ You've ran into an error. Click the page title to go back home.</h1>}/>
      </Switch>
    </main>
    </div>
  )
}

export default App;
