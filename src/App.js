import React, { Component } from "react";
import { BrowserRouter as Router, Route } from 'react-router-dom';
import AppHeader from "./components/header"
import Home from "./components/home";
import About from "./components/about";
import ProductMain from "./components/product-main";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <AppHeader />

          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/products" component={ProductMain} />
          <footer>
          </footer>

        </div>
      </Router>
    );
  }
}

export default App;
