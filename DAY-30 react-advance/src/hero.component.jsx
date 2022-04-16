import { Component } from "react";

class HeroComp extends Component {
  render() {
    if (this.props.power > 5) {
      return (
        <div>
          <h1>Hero component</h1>
          <h3>power: {this.props.power}</h3>
        </div>
      );
    } else {
      throw Error("Power is low");
    }
  }
}

export default HeroComp;
