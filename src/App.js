import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from "./components/header";
import AppFooter from "./components/footer";


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />
          <AppFooter />

        </div>
      </Router>
    );
  }
}

export default App;
