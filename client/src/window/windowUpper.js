import React, { Component} from "react";
import Form from "./form.js";
import Today from "./today.js";
import "./window.css";

class WindowUpper extends Component {
  render() {
    return(
      <div className="window-upper">
        <Form />
        <Today />
      </div>
    );
  }
}

export default WindowUpper;
