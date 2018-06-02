
import React, { Component} from "react";
import Background from "./background/background.js";
import Window from "./window/window.js";
import "./App.css";

class App extends Component{
  render(){
    return(
      <div className="App">
        <Background />
        <Window />
      </div>
    );
  }
}

export default App;
