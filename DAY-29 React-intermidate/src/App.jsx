import React, { Component } from "react";

class App extends Component {
  state = {
    power: 0,
  };

  iref = React.createRef();
  constructor() {
    super();
    this.addPower = this.addPower.bind(this);
  }
  //the object here is the argument for the setState()
  //   addPower() {
  //     this.setState({
  //       power: this.state.power + 1,
  //     });
  //   }

  //   addPower = (event) => {
  //     this.setState({
  //       power: event.target.value,
  //     });
  //   };

  addPower = () => {
    this.setState({
      power: this.iref.current.value,
    });
  };
  render() {
    return (
      <div>
        <h4>Hello Friend</h4>
        <h2>Increase Power</h2>
        <h3>Power is {this.state.power}</h3>
        {/* <button
          onClick={() => {
            this.addPower();
          }}
        >
          Click Here
        </button> */}
        {/* <button onClick={this.addPower}>Click Here</button>
        <input
          type="number"
          onInput={(event) => {
            this.addPower(event);
          }}
        /> */}

        <input type="range" ref={this.iref} />
        <button onClick={this.addPower}>set Power</button>
      </div>
    );
  }
}

export default App;
