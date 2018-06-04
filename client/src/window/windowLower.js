import React, { Component} from "react";
import Forecast from "./forecast.js";
import "./window.css";

class WindowLower extends Component {
  render() {
    return(
      <div className="window-lower">
        <Forecast />
      </div>
    );
  }
}

export default WindowLower;
