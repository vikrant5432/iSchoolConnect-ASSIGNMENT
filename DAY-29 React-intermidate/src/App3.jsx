import { Component } from "react";

class App3 extends Component {
  state = {
    power: 0,
  };

  increasePower = () => {
    //   setState is asyncronus
    /*this.setState({
      power: this.state.power + 1,
    });*/

   /* this.setState(
      {
        power: this.state.power + 1,
      },
      () => {
        if (this.state.power > 9) {
          alert("hero is strong");
        }
      }
    );*/

    this.setState(
      (currentState, currentProps) => {
        console.log(currentState, currentProps);
        return {
          power: currentState.power + 1,
        };
      },
      () => {
        if (this.state.power > 9) {
          alert("hero is strong");
        }
      }
    );
  };

  decreasePower = () => {
    this.setState({
      power: this.state.power - 1,
    });
  };
  render() {
    return (
      <div>
        <h1>Welcome to Application</h1>
        <h2>Power: {this.state.power}</h2>
        <h3>
          Hero is <span>{this.state.power > 9 ? "Strong" : "Weak"}</span>
        </h3>
        <button onClick={this.increasePower}>Increase</button>
        <button onClick={this.decreasePower}>Decrease</button>
      </div>
    );
  }
}

export default App3;
