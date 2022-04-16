import { useReducer, useRef } from "react";

let ChildApp3 = () => {
  let fname = useRef();
  let lname = useRef();
  let uage = useRef();

  //action is user intervention
  let reducerFun = (state, action) => {
    //action.type
    //action.payload
    switch (action.type) {
      case "UPDATEFIRSTNAME":
        return { ...state, firstname: fname.current.value };
      case "UPDATELASTNAME":
        return { ...state, lastname: lname.current.value };
      case "UPDATEAGE":
        return { ...state, age: uage.current.value };
      default:
        return state;
    }
  };

  //dispatch call reducerFun() for activating case
  let [store, dispatch] = useReducer(reducerFun, {
    firstname: "",
    lastname: "",
    age: 0,
  });
  return (
    <div>
      <input type="text" ref={fname} />
      <input type="text" ref={lname} />
      <input ref={uage} />

      <button
        onClick={() => {
          dispatch({ type: "UPDATEFIRSTNAME" });
        }}
      >
        Change first name 
      </button>
      <button
        onClick={() => {
          dispatch({ type: "UPDATELASTNAME" });
        }}
      >
        Change last name
      </button>
      <button onClick={() => dispatch({ type: "UPDATEAGE" })}>
        Change Age{" "}
      </button>
      <h2>FirstName is : {store.firstname}</h2>
      <h2>LastName is : {store.lastname}</h2>
      <h2>Age is: {store.age}</h2>
    </div>
  );
};

export default ChildApp3;
