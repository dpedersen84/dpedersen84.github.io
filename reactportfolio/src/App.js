import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";
import About from "./components/About";
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
      <Closer />
      <Footer />
      </div>
    );
  }
}

export default App;
