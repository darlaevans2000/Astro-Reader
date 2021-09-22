import React, { Component } from 'react';
import ReadingPage from '../ReadingPage/ReadingPage';
import "./Home.css";
import { Link } from 'react-router-dom';

class Home extends Component {
  constructor() {
    super()
    this.state = {
      error: ''
    }
  }

  selectSign = (e) => {
        this.setState({currentZodiac: e.target.className.split('-')[0]});
  }

  changeSign = (sign) => {
        this.setState({currentZodiac:sign});
    }

  render() {
    return (
      <section>
      {this.state.error && <h2>500 Error!</h2>}
      {!this.state.error &&
        <div className='home-page-main'>
        <Link to={'/astro-reader/reading/aries'}>
        <section className='aries-card'>
            <h2>Aries</h2>
            <h3>MAR 21 - APR 19</h3>
            <img src={require('../../icons/aries.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/taurus'}>
        <section className='taurus-card'>
            <h2>Taurus</h2>
            <h3>APR 20 - MAY 20</h3>
            <img src={require('../../icons/taurus.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/gemini'}>
        <section className='gemini-card'>
            <h2>Gemini</h2>
            <h3>MAY 21 - JUN 20</h3>
            <img src={require('../../icons/gemini.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/cancer'}>
        <section className='cancer-card' onClick={(e) => this.selectSign(e)}>
            <h2>Cancer</h2>
            <h3>JUN 21 - JUL 22</h3>
            <img src={require('../../icons/cancer.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/leo'}>
        <section className='leo-card' onClick={(e) => this.selectSign(e)}>
            <h2>Leo</h2>
            <h3>JUL 23 - AUG 22</h3>
            <img src={require('../../icons/leo.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/virgo'}>
        <section className='virgo-card' onClick={(e) => this.selectSign(e)}>
            <h2>Virgo</h2>
            <h3>AUG 23 - SEP 22</h3>
            <img src={require('../../icons/virgo.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/libra'}>
        <section className='libra-card' onClick={(e) => this.selectSign(e)}>
            <h2>Libra</h2>
            <h3>SEP 23 - OCT 22</h3>
            <img src={require('../../icons/libra.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/scorpio'}>
        <section className='scorpio-card' onClick={(e) => this.selectSign(e)}>
            <h2>Scorpio</h2>
            <h3>OCT 23 - NOV 21</h3>
            <img src={require('../../icons/scorpio.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/sagittarius'}>
        <section className='sagittarius-card' onClick={(e) => this.selectSign(e)}>
            <h2>Sagittarius</h2>
            <h3>NOV 22 - DEC 21</h3>
            <img src={require('../../icons/sagittarius.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/capricorn'}>
        <section className='capricorn-card' onClick={(e) => this.selectSign(e)}>
            <h2>Capricorn</h2>
            <h3>DEC 22 - JAN 19</h3>
            <img src={require('../../icons/capricorn.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/aquarius'}>
        <section className='aquarius-card' onClick={(e) => this.selectSign(e)}>
            <h2>Aquarius</h2>
            <h3>JAN 20 - FEB 18</h3>
            <img src={require('../../icons/aquarius.png').default} />
        </section>
        </Link>
        <Link to={'/astro-reader/reading/pisces'}>
        <section className='pisces-card' onClick={(e) => this.selectSign(e)}>
            <h2>Pisces</h2>
            <h3>FEB 19 - MAR 20</h3>
            <img src={require('../../icons/pisces.png').default} />
        </section>
        </Link>
    </div>
        }
        </section>
    )
  }
}

export default Home;