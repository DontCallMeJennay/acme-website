import React, { Component } from "react";
import AppHeader from "./components/header";
import AppFooter from "./components/footer";


class App extends Component {
  render() {
    return (
        <div className="App">
          <AppHeader />
          <AppFooter />
        </div>
    );
  }
}

export default App;
