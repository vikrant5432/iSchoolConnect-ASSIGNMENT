import { Component } from "react";
import ChildApp2 from "./childApp2";

class App2 extends Component {
  render() {
    return (
      <div>
        <h1>Hello Application</h1>
        <hr />
        <ChildApp2 />
      </div>
    );
  }
}

export default App2;
