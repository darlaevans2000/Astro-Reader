import React, { Component } from 'react';
import ReadingPage from '../ReadingPage/ReadingPage';
import "./Home.css";

class Home extends Component {
  constructor() {
    super()
    this.state = {
      currentZodiac: '',
      error: ''
    }
  }

    selectSign = (e) => {
        this.setState({currentZodiac: e.target.className.split('-')[0]});
    }

    renderZodiacSections = () => {
    return (
    <div className='home-page-main'>
        <section className='aries-card' onClick={(e) => this.selectSign(e)}>
            <h2>Aries</h2>
            <h3>MAR 21 - APR 19</h3>
            <img src={require('../../icons/aries.png').default} />
        </section>
        <section className='taurus-card' onClick={(e) => this.selectSign(e)}>
            <h2>Taurus</h2>
            <h3>APR 20 - MAY 20</h3>
            <img src={require('../../icons/taurus.png').default} />
        </section>
        <section className='gemini-card' onClick={(e) => this.selectSign(e)}>
            <h2>Gemini</h2>
            <h3>MAY 21 - JUN 20</h3>
            <img src={require('../../icons/gemini.png').default} />
        </section>
        <section className='cancer-card' onClick={(e) => this.selectSign(e)}>
            <h2>Cancer</h2>
            <h3>JUN 21 - JUL 22</h3>
            <img src={require('../../icons/cancer.png').default} />
        </section>
        <section className='leo-card' onClick={(e) => this.selectSign(e)}>
            <h2>Leo</h2>
            <h3>JUL 23 - AUG 22</h3>
            <img src={require('../../icons/leo.png').default} />
        </section>
        <section className='virgo-card' onClick={(e) => this.selectSign(e)}>
            <h2>Virgo</h2>
            <h3>AUG 23 - SEP 22</h3>
            <img src={require('../../icons/virgo.png').default} />
        </section>
        <section className='libra-card' onClick={(e) => this.selectSign(e)}>
            <h2>Libra</h2>
            <h3>SEP 23 - OCT 22</h3>
            <img src={require('../../icons/libra.png').default} />
        </section>
        <section className='scorpio-card' onClick={(e) => this.selectSign(e)}>
            <h2>Scorpio</h2>
            <h3>OCT 23 - NOV 21</h3>
            <img src={require('../../icons/scorpio.png').default} />
        </section>
        <section className='sagittarius-card' onClick={(e) => this.selectSign(e)}>
            <h2>Sagittarius</h2>
            <h3>NOV 22 - DEC 21</h3>
            <img src={require('../../icons/sagittarius.png').default} />
        </section>
        <section className='capricorn-card' onClick={(e) => this.selectSign(e)}>
            <h2>Capricorn</h2>
            <h3>DEC 22 - JAN 19</h3>
            <img src={require('../../icons/capricorn.png').default} />
        </section>
        <section className='aquarius-card' onClick={(e) => this.selectSign(e)}>
            <h2>Aquarius</h2>
            <h3>JAN 20 - FEB 18</h3>
            <img src={require('../../icons/aquarius.png').default} />
        </section>
        <section className='pisces-card' onClick={(e) => this.selectSign(e)}>
            <h2>Pisces</h2>
            <h3>FEB 19 - MAR 20</h3>
            <img src={require('../../icons/pisces.png').default} />
        </section>
    </div>
    )
}

  changeSign = (sign) => {
        this.setState({currentZodiac:sign});
    }

  render() {
    return (
      <div className="zodiac-container">
          {this.state.currentZodiac === "" ? <section>{this.renderZodiacSections()}</section> :
          <ReadingPage currentZodiac={this.state.currentZodiac}/>
          }
      </div>
    )
  }
}

  export default Home;