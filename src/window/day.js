import React, { Component} from "react";
class Day extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="day">
        <p className="day-date"> {this.props.date} </p>
        <img className="day-img" alt="sunny" src={this.props.img} />
        <p className="day-high"> {this.props.high} </p>
        <p className="day-low"> {this.props.low} </p>
      </div>
    );
  }
}

export default Day;
