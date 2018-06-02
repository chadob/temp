import React, { Component} from "react";
import "./window.css";

class Today extends Component {
  render() {
    return(
      <div className="today">
        <div className="upper-left">
          <span className="today-temp">13°</span>
        </div>
        <div className="upper-right">
          <p className="today-scale">F</p>
          <p className="today-weather">Clear Skies</p>
          <p className="today-humidity">52% Humidity</p>
        </div>
      </div>
    );
  }
}

export default Today;
