import React, { Component } from "react";
import "./App.css";
import TextBox from "./components/text-box";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <TextBox />
          <a className="App-link" href="https://github.com/erinfox">
            Code is here.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
