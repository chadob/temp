
import React, { Component} from "react";
import Background from "./background/background.js";
import Window from "./window/window.js";
import "./App.css";

class App extends Component{
  state = {
    response: ''
  };
  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ response: res.express }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/hello');
    const body = await response.json();

    if (response.status !== 200) throw Error(body.message);

    return body;
  };

  render(){
    return(
      <div className="App">
      {this.state.response}
        <Background />
        <Window />
      </div>
    );
  }
}

export default App;
