import React, { Component} from "react";
import WindowUpper from "./windowUpper.js";
import WindowLower from "./windowLower.js";

import "./window.css";

class Window extends Component {
  render() {
    return(
      <div className="window">
        <WindowUpper />
        <WindowLower />
      </div>
    );
  }
}

export default Window;
