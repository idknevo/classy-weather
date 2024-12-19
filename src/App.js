import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { location: "" };
  }
  fetchWeather() {
    console.log("loading data");
    console.log(this);
  }
  render() {
    return (
      <div className="app">
        <h1>Classy Weather</h1>
        <div>
          <input
            type="text"
            placeholder="Search for location..."
            value={this.state.location}
            onChange={(e) => this.setState({ location: e.target.value })}
          />
        </div>
        <button onClick={this.fetchWeather.bind(this)}>Get Weather</button>
      </div>
    );
  }
}

export default App;
