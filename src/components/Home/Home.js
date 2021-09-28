import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      error: "",
    };
  }

  render() {
    return (
      <section className="home-page">
        {this.state.error && <h2>500 Error!</h2>}
        {!this.state.error && (
          <div className="grid-container">
            <Link to={"/astro-reader/reading/today/aries"}>
              <section className="card">
                <h2>Aries</h2>
                <h3>MAR 21 - APR 19</h3>
                <img src={require("../../icons/aries.png").default} alt="Aries constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/taurus"}>
              <section className="card">
                <h2>Taurus</h2>
                <h3>APR 20 - MAY 20</h3>
                <img src={require("../../icons/taurus.png").default} alt="Taurus constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/gemini"}>
              <section className="card">
                <h2>Gemini</h2>
                <h3>MAY 21 - JUN 20</h3>
                <img src={require("../../icons/gemini.png").default} alt="Gemini constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/cancer"}>
              <section className="card">
                <h2>Cancer</h2>
                <h3>JUN 21 - JUL 22</h3>
                <img src={require("../../icons/cancer.png").default} alt="Cancer constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/leo"}>
              <section className="card">
                <h2>Leo</h2>
                <h3>JUL 23 - AUG 22</h3>
                <img src={require("../../icons/leo.png").default} alt="Leo constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/virgo"}>
              <section className="card">
                <h2>Virgo</h2>
                <h3>AUG 23 - SEP 22</h3>
                <img src={require("../../icons/virgo.png").default} alt="Virgo constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/libra"}>
              <section className="card">
                <h2>Libra</h2>
                <h3>SEP 23 - OCT 22</h3>
                <img src={require("../../icons/libra.png").default} alt="Libra constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/scorpio"}>
              <section className="card">
                <h2>Scorpio</h2>
                <h3>OCT 23 - NOV 21</h3>
                <img src={require("../../icons/scorpio.png").default} alt="Scorpio constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/sagittarius"}>
              <section className="card">
                <h2>Sagittarius</h2>
                <h3>NOV 22 - DEC 21</h3>
                <img src={require("../../icons/sagittarius.png").default} alt="Sagittarius constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/capricorn"}>
              <section className="card">
                <h2>Capricorn</h2>
                <h3>DEC 22 - JAN 19</h3>
                <img src={require("../../icons/capricorn.png").default} alt="Capricorn constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/aquarius"}>
              <section className="card">
                <h2>Aquarius</h2>
                <h3>JAN 20 - FEB 18</h3>
                <img src={require("../../icons/aquarius.png").default} alt="Aquarius constellation"/>
              </section>
            </Link>
            <Link to={"/astro-reader/reading/today/pisces"}>
              <section className="card">
                <h2>Pisces</h2>
                <h3>FEB 19 - MAR 20</h3>
                <img src={require("../../icons/pisces.png").default} alt="Pisces constellation"/>
              </section>
            </Link>
          </div>
        )}
      </section>
    );
  }
}

export default Home;
