import React, { Component} from "react";
import Cloud from "./cloud.js";
import cloudImg from "./cloud.png";
import "../App.css";

const initialState = {
  cloudsArray: [
    {
      width: "20%",
      height: "20%",
      position: {left: "20%", top: "35%"},
      background: cloudImg,
      opacity: .2
    },
    {
      width: "12%",
      height: "14%",
      position: {left: "62%", top: "25%"},
      background: cloudImg,
      opacity: .2
    }
  ]
};
class Background extends Component{
  constructor (props) {
    super(props);
    this.state = initialState;
  }
  render() {
    return (
      <div className="background">
        {this.state.cloudsArray.map((cloud, index) =>
          <Cloud
            position={cloud.position}
            width={cloud.width}
            height={cloud.height}
            background={cloud.background}
            opacity={cloud.opacity}
          />
        )}
      </div>
    );
  }
}

export default Background;
