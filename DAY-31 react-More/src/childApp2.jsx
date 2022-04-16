// import { Component } from "react";
import { useRef, useState } from "react";

/*
class childApp2 extends Component {
  state = {
    power: 0,
  };

  change = () => {
    this.setState({
      power: this.state.power + 1,
    });
  };
  render() {
    return (
      <div>
        <h2>Power :{this.state.power}</h2>
        <button onClick={this.change}>Increase Power</button>
      </div>
    );
  }
}
*/

//React.createRef() is for Class based Component
let ChildApp2 = () => {
  // userState() ---> Hooks
  let [power] = useState(0);
  //   let [firstname, steFirstName] = useState("");
  //   let [lastname, setLastName] = useState("");

  //referance hook for function based Component
  let fname = useRef();
  let lname = useRef();

  let [fullname, setFullName] = useState({ firstname: "", lastname: "" });
  let updateUserInfo = () => {
    setFullName({
      firstname: fname.current.value,
      lastname: lname.current.value,
    });
  };
  return (
    <div>
      <h2>Power :{power}</h2>
      <hr />
      <input type="text" ref={fname} />
      <input type="text" ref={lname} />

      <button onClick={updateUserInfo}>Change Last Name </button>
      <h2>FirstName is : {fullname.firstname}</h2>
      <h2>LastName is : {fullname.lastname}</h2>
      {/* <h2>First Name :{fullname.firstname}</h2>
      <button
        onClick={() => {
          setFullName({ ...fullname, firstname: "Naruto" });
        }}
      >
        Change First Name
      </button>
      <h2>First Name :{fullname.lastname}</h2>

      <button
        onClick={() => {
          setFullName({ ...fullname, lastname: "Uzumaki" });
        }}
      >
        Change Last Name
      </button> */}
    </div>
  );
};


export default ChildApp2;
