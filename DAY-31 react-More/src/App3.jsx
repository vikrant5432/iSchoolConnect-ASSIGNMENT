import { Component } from "react";
import ChildApp3 from "./childApp3";

class App3 extends Component {
  render() {
    return (
      <div>
        <h1>Hello Application</h1>
        <hr />
        <ChildApp3 />
      </div>
    );
  }
}

export default App3;
