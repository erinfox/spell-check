import React, { Component } from "react";
import "./App.css";
import TextBox from "./components/text-box";

class App extends Component {
  render() {
    const words = require("an-array-of-english-words");
    // returns all the words
    // console.log(words);

    // needs to return the input value/word
    const findInputWord = words.filter(word => word.match("key"));
    console.log(findInputWord);

    return (
      <div className="App">
        <header className="App-header">
          <TextBox />
          <a
            className="Code-link"
            href="https://github.com/erinfox/spell-check"
          >
            Code is here.
          </a>
        </header>
      </div>
    );
  }
}

export default App;
