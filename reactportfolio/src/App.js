import React, { Component } from 'react';
import Navbar from "./components/Navbar";
import Jumbotron from "./components/Jumbotron";

class App extends Component {
  render() {
    return (
      <div>
      <Navbar />
      <Jumbotron 
        backgroundImage="https://i.imgur.com/Lx2Sm3S.jpg"/>
      </div>
    );
  }
}

export default App;
