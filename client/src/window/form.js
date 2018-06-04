import React, { Component} from "react";
import "./window.css";
import axios from 'axios';
// import data from '../data/city.list.json'
const initialState = {
  query: "",
  citiesArray: [],
  currentCityId: ""
};
class Form extends Component {
  constructor (props) {
    super(props);
    this.state = initialState;
  }
  handleChange(e) {
    this.setState({ query: e.target.value });
  }
  searchData(query) {
    console.log(query);
    this.setState({ citiesArray: [] });
    const tempArray = [];
    const data = [];
    for (var i=0; i < data.length; i++) {
      if (data[i].name.indexOf(query) >= 0) {
        tempArray.push(data[i]);
      }
    }
    this.setState({ citiesArray: tempArray });
    console.log(this.state.citiesArray);
  }
  getWeather(id) {
    console.log(id);
    axios.get('forecast/' + 519188)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  render() {
    return(
      <div className="form">
        <form>
          <a href="#" onClick={() => {this.getWeather(this.state.query)}}>
            <i className="fas fa-search"></i>
          </a>
          <input placeholder="City name" type="text" value={this.state.query} onChange={this.handleChange.bind(this)} ></input>
          <div className="results">
            {this.state.citiesArray.map((city, index) =>
              <p onClick={() => {this.setState({currentCityId: city.id}); this.getWeather(this.state.currentCityId);}}>
                {city.name}, {city.country}
              </p>
            )}
          </div>
          <a href="#">
          <i className="fas fa-times"></i>
          </a>
        </form>
      </div>
    );
  }
}

export default Form;
