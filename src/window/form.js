import React, { Component} from "react";
import "./window.css";

class Form extends Component {
  render() {
    return(
      <div className="form">
        <form>
          <a href="">
            <i class="fas fa-search"></i>
          </a>
          <input placeholder="City name" type="text"></input>
          <a href="">
          <i class="fas fa-times"></i>
          </a>
        </form>
      </div>
    );
  }
}

export default Form;
