import React, { Component } from "react";
import ChildComp from "./chlid.component";

class App2 extends Component {
  inref = React.createRef();
  state = {
    version: 0,
    title: "default Title",
  };
  ChangeVersion = () => {
    this.setState({
      version: Math.round(Math.random() * 1000),
    });
  };

  ChangeTitle = () => {
    this.setState({
      title: this.inref.current.value,
    });
  };
  render() {
    return (
      <div>
        <h1>Props type / Default type</h1>
        <button
          onClick={() => {
            this.ChangeVersion();
          }}
        >
          Change Version
        </button>
        <br />
        <input type="text" ref={this.inref} />
        <button onClick={this.ChangeTitle}>Change Title</button>
        <hr />
        <ChildComp version={this.state.version} title={this.state.title} />
        <hr />
        <ChildComp title={this.state.title} version={45} />
        <hr />
        <ChildComp version={this.state.version} title="Title Comming Soon" />
        <hr />
        <ChildComp version={45} title="Title Comming Soon" />
      </div>
    );
  }
}

export default App2;
