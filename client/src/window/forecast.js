import React, { Component} from "react";
import Day from "./day.js"
import "./window.css";

const initialState = {
  daysArray: [
    {
      date:"June 1",
      img: require("../background/cloud.png"),
      high: 13,
      low: -2
    },
    {
      date:"June 1",
      img: require("../background/cloud.png"),
      high: 13,
      low: -2
    },
    {
      date:"June 1",
      img: require("../background/cloud.png"),
      high: 13,
      low: -2
    },
    {
      date:"June 1",
      img: require("../background/cloud.png"),
      high: 13,
      low: -2
    }
  ]
};
class Forecast extends Component{
  constructor (props) {
    super(props);
    this.state = initialState;
  }
  render(){
    return(
      <div className="forecast">
        {this.state.daysArray.map((day, index) =>
          <Day
            date={day.date}
            img={day.img}
            high={day.high}
            low={day.low}
          />
        )}
      </div>
    );
  }
}

export default Forecast;
