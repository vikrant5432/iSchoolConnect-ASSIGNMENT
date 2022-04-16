import { useState } from "react";
import { FamilyContext } from "../Context/family.context";
import Parent from "./parent.componen";

/*
class GrandParent extends Component {
  state = {
    power: 0,
  };
  changePower = () => {
    this.setState({
      power: Math.round(Math.random() * 2000),
    });
  };
  render() {
    return (
      <div
        style={{ border: "2px solid red", padding: "10px" }}
        className="grandParentComponent"
      >
        <h2>Grand Parent Component | power :{this.state.power}</h2>
        <button onClick={this.changePower}>Click</button>

        <FamilyContext.Provider value={this.state.power}>
          <Parent />
        </FamilyContext.Provider>
      </div>
    );
  }
}
*/

let GrandParent = () => {
  let [power, changePower] = useState(0);

  let clickHandler = () => {
    changePower(Math.round(Math.random() * 2000));
  };
  return (
    <div
      style={{ border: "2px solid red", padding: "10px" }}
      className="grandParentComponent"
    >
      <h2>Grand Parent Component | power :{power}</h2>
      <button onClick={clickHandler}>Click</button>

      <FamilyContext.Provider value={power}>
        <Parent />
      </FamilyContext.Provider>
    </div>
  );
};

export default GrandParent;
