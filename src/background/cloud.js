import React, { Component} from "react";
import "../App.css";

class Cloud extends Component{
  render(){
    console.log(this.props.opacity);
    return(
      <div className="cloud" style={{top: this.props.position.top, left: this.props.position.left, width: this.props.width, height: this.props.height, backgroundImage: "url(" + this.props.background + ")", opacity: this.props.opacity}}>
      </div>
    );
  }
}

export default Cloud;
