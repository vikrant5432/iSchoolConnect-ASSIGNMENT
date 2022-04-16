/*import { Component } from "react";
import ChildComp from "./ChildComp";

class App1 extends Component {
  state = {
    power: 5,
  };
  constructor() {
    super();
    console.log("MainApp's constructor was called");
  }
  componentDidMount() {
    console.log("MainApp's componentDidMount was called");
  }
  increasePower = () => {
    this.setState({
      power: this.state.power + 1,
    });
  };
  decreasePower = () => {
    this.setState({
      power: this.state.power - 1,
    });
  };
  render() {
    console.log("MainApp's render was called");
    return (
      <div>
        <h1>Welcome to My Application</h1>
        <button onClick={this.increasePower}>Incease Power</button>
        <button onClick={this.decreasePower}>Decrease Power</button>
        <hr />
        {this.state.power < 10 && <ChildComp pow={this.state.power} />}
      </div>
    );
  }
}

export default App1;*/

/*
import { Component } from "react";
import ClassBasedComponent from "./components/class.component";
import FunctionBasedComponent from "./components/function.component";
import MemoFunctionBasedComponent from "./components/memo.function.component";
import PureClassBasedComponent from "./components/pure.class.component";

class MainApp extends Component{
    // component types
    state = {
        power : 1
    }
    increasePower = ()=>{
        this.setState({
            power : this.state.power + 1
        })
    }
    setPower = ()=>{
        this.setState({
            power : 5
        })
    }
    render(){

        return <div>
                    <h1>Main Application | Power is { this.state.power }</h1>
                    <button onClick={ this.increasePower }>Increase Power</button>
                    &nbsp;
                    &nbsp;
                    <button onClick={ this.setPower }>Set Power</button>
                    <hr/>
                    <ClassBasedComponent power={ this.state.power }/>
                    <FunctionBasedComponent power={ this.state.power }/>
                    <PureClassBasedComponent power={ this.state.power }/>
                    <MemoFunctionBasedComponent power={ this.state.power }/>
               </div>
    }
}

export default MainApp;
 */

/*
import { Component } from "react";
import FirstComp from "./components1/first.component";
import SecondComp from "./components1/second.component";

class App1 extends Component {
  render() {
    return (
      <div>
        <h1>Main Application</h1>
        <hr />
        <FirstComp title="First Component" version={101} />
        <SecondComp title="Second Component" version={201} />
      </div>
    );
  }
}

export default App1;
*/

/*
import { Component } from "react";
import PopUpComp from "./popup.component";

class App1 extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <div>
        <h1>Main Application</h1>
        {this.state.show ? (
          <PopUpComp>
            <div className="box">
              <h1>Hello from PopUp</h1>
              <button onClick={() => this.setState({ show: false })}>
                Hide PopUp
              </button>
            </div>
          </PopUpComp>
        ) : (
          <button onClick={() => this.setState({ show: true })}>
            Show PopUp
          </button>
        )}
      </div>
    );
  }
}

export default App1;

*/

/*
import { Component } from "react";
import ErrorManager from "./error.manager";
import HeroComp from "./hero.component";

class App1 extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <div>
        <h1>Welcome to Application</h1>
        <ErrorManager>
          <HeroComp power={6} />
        </ErrorManager>
        <ErrorManager>
          <HeroComp power={7} />
        </ErrorManager>
        <ErrorManager>
          <HeroComp power={3} />
        </ErrorManager>
      </div>
    );
  }
}

export default App1;

*/

import { Component } from "react";
import UserComp from "./user.component";

class App1 extends Component {
  state = {
    show: false,
  };
  render() {
    return (
      <div>
        <h1>Welcome to Application</h1>
        <UserComp />
      </div>
    );
  }
}

export default App1;
