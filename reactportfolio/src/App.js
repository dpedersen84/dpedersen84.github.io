import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
import Projects from "./components/Projects";
import Skills from "./components/Skills";
// import Social from "./components/Social";
import Closer from "./components/Closer";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Jumbotron 
          backgroundImage="https://i.imgur.com/Lx2Sm3S.jpg"/>
        <About />
        <Projects />
        <Skills />
        {/* <Social /> */}
        <Closer />
        <Footer />
      </div>
    );
  }
}

export default App;
